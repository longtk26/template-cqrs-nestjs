import { BaseEntity } from '../domain/entities/base.entity';

export interface BaseMapper<
  DomainEntity extends BaseEntity<unknown>,
  DbRecord,
> {
  toPersistence(entity: DomainEntity): DbRecord;
  toEntity(record: unknown): DomainEntity;
}
