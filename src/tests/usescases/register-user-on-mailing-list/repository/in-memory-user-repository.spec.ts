import { InMemoryUserRepository } from '../../../../usecases/register-user-on-mailing-list/repository/in-memory-user-repository'
import { UserData } from '../../../../usecases/register-user-on-mailing-list/user-data'

describe('In memory user repository', () => {
  it('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByMail('any_mail')
    expect(user).toBe(null)
  })

  it('should return user if it is found in the repository', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)
    await userRepo.add({ name: 'any_name', email: 'any_email' })
    const user = await userRepo.findUserByMail('any_email')
    expect(user).not.toBe(null)
  })

  it('should return all users in the repository', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)
    await userRepo.add({ name: 'any_name1', email: 'any_email1' })
    await userRepo.add({ name: 'any_name2', email: 'any_email2' })
    const allUsers = await userRepo.findAllUsers()
    expect(allUsers.length).toBeGreaterThan(0)
  })
})
