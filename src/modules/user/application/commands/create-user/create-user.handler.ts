import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { IUserWriteRepository } from 'src/modules/user/domain/repositories/user.repository';
import { Inject } from '@nestjs/common';
import { REPOSITORY_WRITE_TOKENS } from 'src/libs/domain/repositories/repository-di.tokens';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    @Inject(REPOSITORY_WRITE_TOKENS.USER_WRITE_REPOSITORY)
    private readonly userWriteRepository: IUserWriteRepository,
  ) {}

  async execute(command: CreateUserCommand): Promise<{ userId: string }> {
    console.log('Creating user with command:', command);
    return {
      userId: '12345',
    };
  }
}
