/** @format */

import { Strategy } from 'passport-http-bearer'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, Dependencies, UnauthorizedException } from '@nestjs/common'

import { AuthService } from './auth.service'

@Injectable()
@Dependencies(AuthService)
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(authService) {
    super()

    this.authService = authService
  }

  async validate(token) {
    const user = await this.authService.validateUser(token)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
