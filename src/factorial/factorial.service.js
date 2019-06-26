/** @format */

import { Injectable } from '@nestjs/common'

const addon = require('bindings')('factorial.node')

@Injectable()
export class FactorialService {
  async calculate(number) {
    const result = addon.factorial(parseInt(number))
    return { result }
  }
}
