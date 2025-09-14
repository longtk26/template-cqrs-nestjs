import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { CreateUserRequestDto, CreateUserResponseDto } from './create-user.dto';

@Controller('users')
export class CreateUserController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createUser(
    @Body() body: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    const command = new CreateUserCommand(body);

    return this.commandBus.execute(command);
  }
}
