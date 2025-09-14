import { Command } from '@nestjs/cqrs';
import { CreateUserRequestDto, CreateUserResponseDto } from './create-user.dto';

export class CreateUserCommand extends Command<CreateUserResponseDto> {
  constructor(public readonly userData: CreateUserRequestDto) {
    super();
  }
}
