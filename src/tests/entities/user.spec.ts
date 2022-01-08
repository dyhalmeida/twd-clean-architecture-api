import { InvalidEmailError } from '../../entities/errors/invalid-email-error'
import { User } from '../../entities/user'
import { left } from '../../shared/either'

describe('User domain entity', () => {
  it('should not create a user with invalid email', () => {
    const invalidEmail = 'inavalid_email'
    const error = User.create({ name: 'any_name', email: invalidEmail })
    expect(error).toEqual(left(new InvalidEmailError()))
  })
})
