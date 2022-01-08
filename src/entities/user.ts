import { Either, left, right } from '../shared/either'
import { InvalidEmailError } from './errors/invalid-email-error'
import { InvalidNameError } from './errors/invalid-name-error'
import { Email } from './email'
import { Name } from './name'
import { UserData } from './user-data'

export class User {
  static create (user: UserData): Either<InvalidNameError | InvalidEmailError, User> {
    const emailOrError = Email.create(user.email)
    const nameOrError = Name.create(user.name)
    if (emailOrError.isLeft()) return left(new InvalidEmailError())
    if (nameOrError.isLeft()) return left(new InvalidNameError())
    return right(user)
  }
}
