import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { IUserWriteRepository } from 'src/modules/user/domain/repositories/user.repository';
import { Inject } from '@nestjs/common';
import { USER_REPOSITORY_WRITE_TOKEN } from 'src/modules/user/user-di.tokens';
import { CreateUserResponseDto } from './create-user.dto';
import { UserEntity } from 'src/modules/user/domain/entities/user.entity';
import { Transactional } from '@nestjs-cls/transactional';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    @Inject(USER_REPOSITORY_WRITE_TOKEN)
    private readonly userWriteRepository: IUserWriteRepository,
  ) {}

  @Transactional()
  async execute(command: CreateUserCommand): Promise<CreateUserResponseDto> {
    const newUserEntity = UserEntity.Builder.withCreateUserData(
      command.userData,
    ).build();
    const newUser = await this.userWriteRepository.create(newUserEntity);
    return {
      id: newUser.id,
    };
  }
}
