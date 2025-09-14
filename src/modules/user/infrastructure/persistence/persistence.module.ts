import { Global, Module } from '@nestjs/common';
import {
  PrismaUserReadRepository,
  PrismaUserWriteRepository,
} from './prisma/repositories/prisma-user.repository';
import {
  USER_REPOSITORY_READ_TOKEN,
  USER_REPOSITORY_WRITE_TOKEN,
} from '../../user-di.tokens';

@Global()
@Module({
  providers: [
    {
      provide: USER_REPOSITORY_READ_TOKEN,
      useClass: PrismaUserReadRepository,
    },
    {
      provide: USER_REPOSITORY_WRITE_TOKEN,
      useClass: PrismaUserWriteRepository,
    },
  ],
  exports: [USER_REPOSITORY_READ_TOKEN, USER_REPOSITORY_WRITE_TOKEN],
})
export class PersistenceUserModule {}
