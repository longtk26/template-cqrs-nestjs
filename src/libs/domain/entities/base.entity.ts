import crypto from 'crypto';

export interface BaseEntityProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

export interface CreateEntityProps<T> {
  id: string;
  props: T;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export abstract class BaseEntity<EntityProps> {
  private _id: string;
  private props: Omit<EntityProps, keyof BaseEntityProps>;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _deletedAt: Date | null;

  constructor({
    id,
    props,
    createdAt,
    updatedAt,
    deletedAt,
  }: CreateEntityProps<Omit<EntityProps, keyof BaseEntityProps>>) {
    this.setId(id || crypto.randomUUID());
    const now = new Date();
    this._createdAt = createdAt || now;
    this._updatedAt = updatedAt || now;
    this._deletedAt = deletedAt || null;
    this.props = props;
  }

  public getProps(): Readonly<EntityProps & BaseEntityProps> {
    return Object.freeze({
      id: this._id,
      ...this.props,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      deletedAt: this._deletedAt,
    } as Readonly<EntityProps & BaseEntityProps>);
  }

  get id(): string {
    return this._id;
  }
  private setId(id: string) {
    this._id = id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
  set createdAt(date: Date) {
    this._createdAt = date;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }
  set updatedAt(date: Date) {
    this._updatedAt = date;
  }

  get deletedAt(): Date | null {
    return this._deletedAt;
  }
  set deletedAt(date: Date | null) {
    this._deletedAt = date;
  }

  public abstract validate(): void;
  public abstract resetEntity(entity: EntityProps): BaseEntity<EntityProps>;
}
