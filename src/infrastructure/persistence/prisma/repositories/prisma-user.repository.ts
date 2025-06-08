import { User as PrismaUser } from '@prisma/client';
import { PrismaBaseReadRepository } from './prisma-base.repository';
import { TransactionHost } from '@nestjs-cls/transactional';
import { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';

export class PrismaUserReadRepository extends PrismaBaseReadRepository<PrismaUser> {
  protected model = 'user';
  protected readonly prisma: TransactionHost<TransactionalAdapterPrisma>;

  constructor(txHost: TransactionHost<TransactionalAdapterPrisma>) {
    super(txHost);
  }
}
