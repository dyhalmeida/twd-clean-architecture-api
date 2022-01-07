import { InMemoryUserRepository } from '../../../../usecases/register-user-on-mailing-list/repository/in-memory-user-repository'
import { UserData } from '../../../../usecases/register-user-on-mailing-list/user-data'

describe('In memory user repository', () => {
  it('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByMail('any_mail')
    expect(user).toBe(null)
  })
})
