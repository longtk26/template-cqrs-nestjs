import { User as PrismaUser } from '@prisma/client';
import {
  IBaseReadRepository,
  IBaseWriteRepository,
} from 'src/libs/domain/repositories/base.repository';
import { UserEntity } from '../entities/user.entity';

export interface IUserReadRepository extends IBaseReadRepository<PrismaUser> {
  findByEmail(email: string): Promise<UserEntity | null>;
}

export interface IUserWriteRepository
  extends IBaseWriteRepository<PrismaUser> {}
