import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindUserByEmailQuery } from './find-user.query';
import { USER_REPOSITORY_READ_TOKEN } from 'src/modules/user/user-di.tokens';
import { Inject } from '@nestjs/common';
import { UserEntity } from 'src/modules/user/domain/entities/user.entity';
import { IUserReadRepository } from 'src/modules/user/domain/repositories/user.repository';

@QueryHandler(FindUserByEmailQuery)
export class FindUserByEmailHandler
  implements IQueryHandler<FindUserByEmailQuery>
{
  constructor(
    @Inject(USER_REPOSITORY_READ_TOKEN)
    private readonly userReadRepository: IUserReadRepository,
  ) {}

  async execute(
    query: FindUserByEmailQuery,
  ): Promise<{ user: UserEntity | null }> {
    const user = await this.userReadRepository.findByEmail(query.email);
    return { user };
  }
}
