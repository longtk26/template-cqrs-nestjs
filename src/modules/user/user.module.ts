import { Module } from '@nestjs/common';
import { CreateUserController } from './application/commands/create-user/create-user.controller';
import { CreateUserHandler } from './application/commands/create-user/create-user.handler';

@Module({
  controllers: [CreateUserController],
  providers: [CreateUserHandler],
})
export class UserModule {}
