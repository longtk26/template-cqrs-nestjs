import { Command } from '@nestjs/cqrs';

export class CreateUserCommand extends Command<{
  userId: string;
}> {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
  ) {
    super();
  }
}
