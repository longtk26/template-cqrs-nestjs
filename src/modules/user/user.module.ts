import { Module } from '@nestjs/common';
import { CreateUserController } from './application/commands/create-user/create-user.controller';
import { CreateUserHandler } from './application/commands/create-user/create-user.handler';
import { InfrastructureUserModule } from './infrastructure/infrastructure.module';
import { UserMapper } from './user.mapper';

@Module({
  imports: [InfrastructureUserModule],
  controllers: [CreateUserController],
  providers: [CreateUserHandler, UserMapper],
})
export class UserModule {}
