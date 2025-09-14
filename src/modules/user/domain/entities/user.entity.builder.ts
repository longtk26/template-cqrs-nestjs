import { CreateUserRequestDto } from 'src/modules/user/application/commands/create-user/create-user.dto';
import { UserEntity } from './user.entity';
import { User as PrismaUser } from '@prisma/client';

export class UserEntityBuilder {
  _id?: string;
  _name: string | null = null;
  _email!: string;
  _password!: string;
  _createdAt?: Date;
  _updatedAt?: Date;
  _deletedAt?: Date | null;

  withId(id: string): this {
    this._id = id;
    return this;
  }

  withName(name: string | null): this {
    this._name = name;
    return this;
  }

  withEmail(email: string): this {
    this._email = email;
    return this;
  }

  withPassword(password: string): this {
    this._password = password;
    return this;
  }

  withCreatedAt(createdAt: Date): this {
    this._createdAt = createdAt;
    return this;
  }

  withUpdatedAt(updatedAt: Date): this {
    this._updatedAt = updatedAt;
    return this;
  }

  withDeletedAt(deletedAt: Date | null): this {
    this._deletedAt = deletedAt;
    return this;
  }

  withCreateUserData(data: CreateUserRequestDto): this {
    this._name = data.name ?? null;
    this._email = data.email;
    this._password = data.password;
    return this;
  }

  withPersistence(record: PrismaUser): this {
    this._id = record.id;
    this._name = record.name;
    this._email = record.email;
    this._password = record.password;
    this._createdAt = record.createdAt;
    this._updatedAt = record.updatedAt;
    this._deletedAt = record.deletedAt;
    return this;
  }

  build(): UserEntity {
    return new UserEntity(this);
  }
}
