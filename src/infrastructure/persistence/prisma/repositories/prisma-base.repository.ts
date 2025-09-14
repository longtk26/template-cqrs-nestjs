import { Transactional, TransactionHost } from '@nestjs-cls/transactional';
import { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';
import { BaseEntity } from 'src/libs/domain/entities/base.entity';
import {
  IBaseReadRepository,
  IBaseWriteRepository,
} from 'src/libs/domain/repositories/base.repository';

abstract class PrismaBaseReadRepository<T> implements IBaseReadRepository<T> {
  protected model: string;
  protected readonly prisma: TransactionHost<TransactionalAdapterPrisma>;

  constructor(txHost: TransactionHost<TransactionalAdapterPrisma>) {
    this.prisma = txHost;
  }

  async findById(id: string): Promise<T | null> {
    return this.prisma.tx[this.model].findUnique({
      where: { id },
    });
  }

  async findMany(): Promise<T[]> {
    return this.prisma.tx[this.model].findMany();
  }
}

abstract class PrismaBaseWriteRepository<T> implements IBaseWriteRepository<T> {
  protected model: string;
  protected readonly prisma: TransactionHost<TransactionalAdapterPrisma>;

  constructor(txHost: TransactionHost<TransactionalAdapterPrisma>) {
    this.prisma = txHost;
  }

  async create<T>(entity: BaseEntity<T>): Promise<BaseEntity<T>> {
    console.log('model', this.model);
    console.log('prisma', this.prisma);
    const record: T = await this.prisma.tx[this.model].create({
      data: {
        ...entity.getProps(),
      },
    });

    return entity.resetEntity(record);
  }

  async update<T>(id: string, entity: BaseEntity<T>): Promise<BaseEntity<T>> {
    const record: T = await this.prisma.tx[this.model].update({
      where: { id },
      data: {
        ...entity.getProps(),
      },
    });

    return entity.resetEntity(record);
  }

  async delete(id: string): Promise<string | null> {
    await this.prisma.tx[this.model].delete({
      where: { id },
    });
    return id;
  }

  async createMany<T>(entities: BaseEntity<T>[]): Promise<BaseEntity<T>[]> {
    const records: T[] = await this.prisma.tx[this.model].createMany({
      data: entities.map((entity) => entity.getProps()),
    });

    return records.map((record, index) => entities[index].resetEntity(record));
  }

  @Transactional()
  async transaction<T>(callback: () => Promise<T>): Promise<T> {
    return callback();
  }
}

export { PrismaBaseReadRepository, PrismaBaseWriteRepository };
