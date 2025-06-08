import { User as PrismaUser } from '@prisma/client';
import {
  BaseEntity,
  BaseEntityProps,
} from 'src/libs/domain/entities/base.entity';

export interface UserEntityProps extends BaseEntityProps {
  name: string;
  email: string;
  password: string;
}

export class UserEntity extends BaseEntity<PrismaUser> {
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(createProps: UserEntityProps) {
    super({
      id: createProps.id,
      props: {
        name: createProps.name,
        email: createProps.email,
        password: createProps.password,
      },
      createdAt: createProps.createdAt,
      updatedAt: createProps.updatedAt,
      deletedAt: createProps.deletedAt,
    });

    this._name = createProps.name;
    this._email = createProps.email;
    this._password = createProps.password;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  get password(): string {
    return this._password;
  }
  set password(password: string) {
    this._password = password;
  }

  public validate(): void {}
  public resetEntity(entity: PrismaUser): UserEntity {
    return new UserEntity(entity as UserEntityProps);
  }
}
