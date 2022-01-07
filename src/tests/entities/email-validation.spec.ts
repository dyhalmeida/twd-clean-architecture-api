import { Email } from '../../entities/email'

describe('Email validation', () => {
  it('should not accept null string', () => {
    const email = null
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept empty string', () => {
    const email = ''
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should accept a valid email', () => {
    const email = 'anyemail@anydomain.com'
    expect(Email.validate(email)).toBeTruthy()
  })

  it('should not accept string longer than 320 characters', () => {
    const email = `${'l'.repeat(64)}@${'d'.repeat(128)}.${'d'.repeat(127)}`
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept local part longer than 64 characters', () => {
    const email = 'l'.repeat(65).concat('@any_mail.com')
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept domain longer than 255 characters', () => {
    const email = `any_mail@${'d'.repeat(128)}.${'d'.repeat(127)}`
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept empty local part', () => {
    const email = '@any_mail.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept empty domain', () => {
    const email = 'any_email@'
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept domain with a part longer than 63 characters', () => {
    const email = `any_email@${'d'.repeat(64)}.com`
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept local part with invalid character', () => {
    const email = 'any email@anymail.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept email without an @', () => {
    const email = 'anyemailanymail.com'
    expect(Email.validate(email)).toBeFalsy()
  })
})
