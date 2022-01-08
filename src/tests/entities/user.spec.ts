import { InvalidEmailError } from '../../entities/errors/invalid-email-error'
import { InvalidNameError } from '../../entities/errors/invalid-name-error'
import { User } from '../../entities/user'
import { left } from '../../shared/either'

describe('User domain entity', () => {
  it('should not create a user with invalid email', () => {
    const invalidEmail = 'inavalid_email'
    const error = User.create({ name: 'any_name', email: invalidEmail })
    expect(error).toEqual(left(new InvalidEmailError()))
  })

  it('should not create user with invalid name (too few chars)', () => {
    const invalidName = 'D     '
    const error = User.create({ name: invalidName, email: 'anyemail@any.com' })
    expect(error).toEqual(left(new InvalidNameError()))
  })

  it('should not create user with invalid name (too many chars)', () => {
    const invalidName = 'D'.repeat(257)
    const error = User.create({ name: invalidName, email: 'anyemail@any.com' })
    expect(error).toEqual(left(new InvalidNameError()))
  })
})
