import { BaseEntity } from '../entities/base.entity';

interface IInputData<T> {
  create: (entity: BaseEntity<T>) => Promise<BaseEntity<T>>;
  update: (id: string, entity: BaseEntity<T>) => Promise<BaseEntity<T>>;
  delete: (id: string) => Promise<string | null>;
  createMany: (entities: BaseEntity<T>[]) => Promise<BaseEntity<T>[]>;
}

interface IOutputData<T> {
  findMany: () => Promise<T[]>;
  findById: (id: string) => Promise<T | null>;
}

interface ITransactionRepository {
  transaction: <T>(callback: () => Promise<T>) => Promise<T>;
}

interface IBaseReadRepository<T> extends IOutputData<T> {}

interface IBaseWriteRepository<T>
  extends IInputData<T>,
    ITransactionRepository {}

export type { IBaseReadRepository, IBaseWriteRepository };
