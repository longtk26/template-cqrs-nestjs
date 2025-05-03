interface IInputData<T, C, O> {
  create: ({ data }: { data: C }) => Promise<string>;
  update: ({
    id,
    data,
    option,
  }: {
    id: string;
    data: Partial<T>;
    option: O;
  }) => Promise<string>;
  delete: ({ id, option }: { id: string; option: O }) => Promise<string>;
  createMany: ({ data }: { data: C[] }) => Promise<string[]>;
}

interface IOutputData<T, O> {
  findMany: () => Promise<T[]>;
  findOne: ({ id, option }: { id: string; option: O }) => Promise<T>;
}

interface ITransactionRepository<T> {
  transaction: (callback: () => Promise<T>) => Promise<T>;
}

interface IBaseReadRepository<T, O> extends IOutputData<T, O> {}
interface IBaseWriteRepository<T, C, O>
  extends IInputData<T, C, O>,
    ITransactionRepository<T> {}

export type { IBaseReadRepository, IBaseWriteRepository };
