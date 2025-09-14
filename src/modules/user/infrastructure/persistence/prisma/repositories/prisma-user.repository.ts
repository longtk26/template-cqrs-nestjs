import { User as PrismaUser } from '@prisma/client';
import {
  PrismaBaseReadRepository,
  PrismaBaseWriteRepository,
} from 'src/infrastructure/persistence/prisma/repositories/prisma-base.repository';
import { TransactionHost } from '@nestjs-cls/transactional';
import { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';
import {
  IUserReadRepository,
  IUserWriteRepository,
} from 'src/modules/user/domain/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/modules/user/domain/entities/user.entity';
import { UserMapper } from 'src/modules/user/user.mapper';

@Injectable()
export class PrismaUserReadRepository
  extends PrismaBaseReadRepository<PrismaUser>
  implements IUserReadRepository
{
  protected model = 'user';
  protected readonly prisma: TransactionHost<TransactionalAdapterPrisma>;

  constructor(
    txHost: TransactionHost<TransactionalAdapterPrisma>,
    private readonly userMapper: UserMapper,
  ) {
    super(txHost);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.tx.user.findUnique({
      where: { email },
    });
    if (!user) {
      return null;
    }
    return this.userMapper.toEntity(user);
  }
}

@Injectable()
export class PrismaUserWriteRepository
  extends PrismaBaseWriteRepository<PrismaUser>
  implements IUserWriteRepository
{
  protected model = 'user';
  protected readonly prisma: TransactionHost<TransactionalAdapterPrisma>;

  constructor(txHost: TransactionHost<TransactionalAdapterPrisma>) {
    super(txHost);
  }
}
