import { Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';

@Controller('users')
export class CreateUserController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createUser(): Promise<{ userId: string }> {
    const command = new CreateUserCommand(
      'John Doe',
      'email@gmail.com',
      'password123',
    );
    return this.commandBus.execute(command);
  }
}
