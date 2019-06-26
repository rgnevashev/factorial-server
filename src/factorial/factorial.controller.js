/** @format */

import { Controller, Dependencies, Post, Body, Bind } from '@nestjs/common'
import { FactorialService } from './factorial.service'

@Controller('factorial')
@Dependencies(FactorialService)
export class FactorialController {
  constructor(factorialService) {
    this.factorialService = factorialService
  }

  @Post()
  @Bind(Body())
  async calculate(data) {
    const { number } = data
    return this.factorialService.calculate(number || 1)
  }
}
