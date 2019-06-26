/** @format */

import { Module } from '@nestjs/common'
import { FactorialModule } from './factorial/factorial.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [FactorialModule, AuthModule, UsersModule],
  controllers: [],
  providers: []
})
export class AppModule {}
