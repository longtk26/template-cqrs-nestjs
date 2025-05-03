import {
  IBaseReadRepository,
  IBaseWriteRepository,
} from './base.repository.types';

class BaseReadRepository<T, O> implements IBaseReadRepository<T, O> {
  async findMany(): Promise<T[]> {
    // Implement the logic to find multiple records
    return [];
  }

  async findOne({ id, option }: { id: string; option: O }): Promise<T> {
    // Implement the logic to find a single record based on the provided id and option
    return {} as T;
  }
}

class BaseWriteRepository<T, C, O> implements IBaseWriteRepository<T, C, O> {
  async create({ data }: { data: C }): Promise<string> {
    // Implement the logic to create a new record
    return '';
  }

  async update({
    id,
    data,
    option,
  }: {
    id: string;
    data: Partial<T>;
    option: O;
  }): Promise<string> {
    // Implement the logic to update an existing record based on the provided id, data, and option
    return '';
  }

  async delete({ id, option }: { id: string; option: O }): Promise<string> {
    // Implement the logic to delete a record based on the provided id and option
    return '';
  }

  async createMany({ data }: { data: C[] }): Promise<string[]> {
    // Implement the logic to create multiple records
    return [];
  }

  async transaction(callback: () => Promise<T>): Promise<T> {
    // Implement the logic for transaction handling
    return {} as T;
  }
}

export { BaseReadRepository, BaseWriteRepository };
