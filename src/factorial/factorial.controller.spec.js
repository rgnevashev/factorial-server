/** @format */

import { Test } from '@nestjs/testing'
import { FactorialController } from './factorial.controller'

describe('Factorial Controller', () => {
  let controller

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [FactorialController]
    }).compile()

    controller = module.get(FactorialController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
