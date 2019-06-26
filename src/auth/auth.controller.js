/** @format */

import { Controller, Dependencies, Post, Body, Bind } from '@nestjs/common'

import { AuthService } from './auth.service'

@Controller('auth')
@Dependencies(AuthService)
export class AuthController {
  constructor(authService) {
    this.authService = authService
  }

  @Post('login')
  @Bind(Body())
  async login(data) {
    return await this.authService.login(data)
  }

  @Post('signup')
  @Bind(Body())
  async signup(data) {
    return await this.signup.signup(data)
  }
}
