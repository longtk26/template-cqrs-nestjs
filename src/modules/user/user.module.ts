import { Module } from '@nestjs/common';
import { CreateUserHttpController } from './commands/create-user/create-user.http.controller';
import { CreateUserHandler } from './commands/create-user/create-user.handler';

@Module({
  controllers: [CreateUserHttpController],
  providers: [CreateUserHandler],
})
export class UserModule {}
