import { User as PrismaUser } from '@prisma/client';
import {
  IBaseReadRepository,
  IBaseWriteRepository,
} from 'src/libs/domain/repositories/base.repository';

export interface IUserReadRepository extends IBaseReadRepository<PrismaUser> {}

export interface IUserWriteRepository
  extends IBaseWriteRepository<PrismaUser> {}
