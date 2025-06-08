import { Module } from '@nestjs/common';
import { CreateUserHttpController } from './application/commands/create-user/create-user.controller';
import { CreateUserHandler } from './application/commands/create-user/create-user.handler';

@Module({
  controllers: [CreateUserHttpController],
  providers: [CreateUserHandler],
})
export class UserModule {}
