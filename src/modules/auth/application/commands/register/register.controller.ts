import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { RegisterRequestDto, RegisterResponseDto } from './register.dto';
import { RegisterCommand } from './register.command';

@Controller('auth/register')
export class RegisterController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async register(
    @Body() body: RegisterRequestDto,
  ): Promise<RegisterResponseDto> {
    const command = new RegisterCommand(body);

    return this.commandBus.execute(command);
  }
}
