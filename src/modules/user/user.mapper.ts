import { Injectable } from '@nestjs/common';
import { BaseMapper } from 'src/libs/mapper/mapper.interface';
import { UserEntity } from './domain/entities/user.entity';
import { User as PrismaUser } from '@prisma/client';

@Injectable()
export class UserMapper implements BaseMapper<UserEntity, PrismaUser> {
  toPersistence(entity: UserEntity): PrismaUser {
    const props = entity.getProps();
    return {
      id: entity.id,
      email: props.email,
      name: props.name,
      password: '',
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      deletedAt: entity.deletedAt,
    };
  }

  toEntity(record: PrismaUser): UserEntity {
    return UserEntity.Builder.withPersistence(record).build();
  }
}
