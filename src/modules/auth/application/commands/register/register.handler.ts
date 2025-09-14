import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Transactional } from '@nestjs-cls/transactional';
import { RegisterCommand } from './register.command';
import { RegisterResponseDto } from './register.dto';

@CommandHandler(RegisterCommand)
export class RegisterHandler implements ICommandHandler<RegisterCommand> {
  constructor() {}

  @Transactional()
  async execute(command: RegisterCommand): Promise<RegisterResponseDto> {
    const { email, password } = command.registerData;
    // Check email exists,

    // Hash password,

    // Create user in DB,

    // Generate tokens
    return {
      id: 'newly-created-user-id',
      accessToken: 'generated-access-token',
      refreshToken: 'generated-refresh-token',
    };
  }
}
