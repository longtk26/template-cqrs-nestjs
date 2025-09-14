import { User as PrismaUser } from '@prisma/client';
import {
  BaseEntity,
  BaseEntityProps,
} from 'src/libs/domain/entities/base.entity';
import { UserEntityBuilder } from './user.entity.builder';

export interface UserEntityProps extends BaseEntityProps {
  name: string | null;
  email: string;
  password: string;
}

export class UserEntity extends BaseEntity<PrismaUser> {
  pro: string;
  name: string | null;
  constructor(builder: UserEntityBuilder) {
    super({
      id: builder._id,
      props: {
        name: builder._name,
        email: builder._email,
        password: builder._password,
      },
      createdAt: builder._createdAt,
      updatedAt: builder._updatedAt,
      deletedAt: builder._deletedAt,
    });
  }

  static get Builder() {
    return new UserEntityBuilder();
  }

  public validate(): void {
    // Add validation logic here
  }

  public resetEntity(entity: PrismaUser): UserEntity {
    return UserEntity.Builder.withId(entity.id)
      .withName(entity.name)
      .withEmail(entity.email)
      .withPassword(entity.password)
      .withCreatedAt(entity.createdAt)
      .withUpdatedAt(entity.updatedAt)
      .withDeletedAt(entity.deletedAt)
      .build();
  }
}
