import { Either, left, right } from '../shared/either'
import { InvalidEmailError } from './errors/invalid-email-error'
import { InvalidNameError } from './errors/invalid-name-error'
import { Email } from './email'
import { Name } from './name'
import { UserData } from './user-data'

export class User {
  public readonly name: Name
  public readonly email: Email

  constructor (name: Name, email: Email) {
    this.name = name
    this.email = email
  }

  static create (user: UserData): Either<InvalidNameError | InvalidEmailError, User> {
    const emailOrError = Email.create(user.email)
    const nameOrError = Name.create(user.name)
    if (emailOrError.isLeft()) return left(new InvalidEmailError())
    if (nameOrError.isLeft()) return left(new InvalidNameError())

    const name = nameOrError.value
    const email = emailOrError.value

    return right(new User(name, email))
  }
}
