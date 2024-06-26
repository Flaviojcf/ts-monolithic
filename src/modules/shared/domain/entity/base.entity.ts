import type Id from '../value-object/id.value.object'
import type AggregateRoot from './aggregate.root.interface'

export default class BaseEntity implements AggregateRoot {
  private readonly _id: Id
  private readonly _createdAt: Date
  private _updatedAt: Date

  constructor (id?: Id) {
    this._id = id
    this._createdAt = new Date()
    this._updatedAt = new Date()
  }

  get id (): Id {
    return this._id
  }

  get createdAt (): Date {
    return this._createdAt
  }

  get updatedAt (): Date {
    return this._updatedAt
  }

  set updatedAt (updatedAt: Date) {
    this._updatedAt = updatedAt
  }
}
