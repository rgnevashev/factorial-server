/** @format */

import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
  async findOneByToken(token) {
    return {
      id: 'test',
      username: 'test',
      email: 'test@gmail.com'
    }
  }
}
