import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor() {}

  async execute(command: CreateUserCommand): Promise<{ userId: string }> {
    console.log('Creating user with command:', command);
    return {
      userId: '12345',
    };
  }
}
