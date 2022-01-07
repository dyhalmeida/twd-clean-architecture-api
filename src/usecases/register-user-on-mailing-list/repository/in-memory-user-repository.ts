import { UserRepository } from '../../ports/user-repository'
import { UserData } from '../../../entities/user-data'

export class InMemoryUserRepository implements UserRepository {
  // eslint-disable-next-line no-useless-constructor
  constructor (private repository: UserData[]) {

  }

  async add (user: UserData): Promise<void> {
    const userExits = await this.exists(user)
    if (!userExits) {
      this.repository = [...this.repository, user]
    }
  }

  async findUserByMail (email: string): Promise<UserData | null> {
    const user = this.repository.find(user => user.email === email)
    return user ? Promise.resolve(user) : Promise.resolve(null)
  }

  async findAllUsers (): Promise<UserData[]> {
    return Promise.resolve(this.repository)
  }

  async exists (user: UserData): Promise<boolean> {
    const userFound = await this.findUserByMail(user.email)
    return userFound ? Promise.resolve(true) : Promise.resolve(false)
  }
}
