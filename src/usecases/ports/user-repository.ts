import { UserData } from '../register-user-on-mailing-list/user-data'

export interface UserRepository {
  add(user: UserData): Promise<void>
  findUserByMail(email: string): Promise<UserData | null>
  findAllUsers(): Promise<UserData[]>
  exists(user: UserData): Promise<boolean>
}
