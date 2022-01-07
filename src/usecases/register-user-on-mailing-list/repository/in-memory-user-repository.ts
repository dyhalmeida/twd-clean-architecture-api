import { UserRepository } from '../../ports/user-repository'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  // eslint-disable-next-line no-useless-constructor
  constructor (private repository: UserData[]) {

  }

  add (user: UserData): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findUserByMail (email: string): Promise<UserData | null> {
    return Promise.resolve(null)
  }

  findAllUsers (): Promise<UserData[]> {
    throw new Error('Method not implemented.')
  }

  exists (user: UserData): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
