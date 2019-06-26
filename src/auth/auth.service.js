/** @format */

import { Injectable, Dependencies } from '@nestjs/common'

import { UsersService } from '../users/users.service'

@Injectable()
@Dependencies(UsersService)
export class AuthService {
  constructor(usersService) {
    this.usersService = usersService
  }

  async login(data) {
    return {
      userId: 'test',
      token: 'tok_test'
    }
  }

  async signup(data) {
    return {
      userId: 'test',
      token: 'tok_test'
    }
  }

  async validateUser(token) {
    // Validate if token passed along with HTTP request is associated with any registered account in the database
    return await this.usersService.findOneByToken(token)
  }
}
