import { Module } from '@nestjs/common';
import { CreateUserController } from './application/commands/register/register.controller';
import { CreateUserHandler } from './application/commands/register/register.handler';

@Module({
  controllers: [CreateUserController],
  providers: [CreateUserHandler],
})
export class UserModule {}
