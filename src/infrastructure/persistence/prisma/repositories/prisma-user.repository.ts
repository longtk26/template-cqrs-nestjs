import { User as PrismaUser } from '@prisma/client';
import {
  PrismaBaseReadRepository,
  PrismaBaseWriteRepository,
} from './prisma-base.repository';
import { TransactionHost } from '@nestjs-cls/transactional';
import { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';
import {
  IUserReadRepository,
  IUserWriteRepository,
} from 'src/modules/user/domain/repositories/user.repository';

export class PrismaUserReadRepository
  extends PrismaBaseReadRepository<PrismaUser>
  implements IUserReadRepository
{
  protected model = 'user';
  protected readonly prisma: TransactionHost<TransactionalAdapterPrisma>;

  constructor(txHost: TransactionHost<TransactionalAdapterPrisma>) {
    super(txHost);
  }
}

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
