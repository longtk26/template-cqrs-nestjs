import { Command } from '@nestjs/cqrs';
import { RegisterRequestDto, RegisterResponseDto } from './register.dto';

export class RegisterCommand extends Command<RegisterResponseDto> {
  constructor(public readonly registerData: RegisterRequestDto) {
    super();
  }
}
