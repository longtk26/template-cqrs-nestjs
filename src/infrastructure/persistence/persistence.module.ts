import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserReadRepository } from './prisma/repositories/prisma-user.repository';
import {
  REPOSITORY_READ_TOKENS,
  REPOSITORY_WRITE_TOKENS,
} from 'src/libs/domain/repositories/repository-di.tokens';

@Global()
@Module({
  imports: [],
  providers: [
    PrismaService,
    {
      provide: REPOSITORY_READ_TOKENS.USER_READ_REPOSITORY,
      useClass: PrismaUserReadRepository,
    },
    {
      provide: REPOSITORY_WRITE_TOKENS.USER_WRITE_REPOSITORY,
      useClass: PrismaUserReadRepository,
    },
  ],
  exports: [
    PrismaService,
    REPOSITORY_READ_TOKENS.USER_READ_REPOSITORY,
    REPOSITORY_WRITE_TOKENS.USER_WRITE_REPOSITORY,
  ],
})
export class PersistenceModule {}
