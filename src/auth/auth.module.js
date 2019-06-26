/** @format */

import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { HttpStrategy } from './http.strategy'
import { UsersModule } from '../users/users.module'
import { PassportModule } from '@nestjs/passport'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer' }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, HttpStrategy],
  exports: [PassportModule, AuthService]
})
export class AuthModule {}
