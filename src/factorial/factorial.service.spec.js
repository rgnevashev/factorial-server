/** @format */

import { Test } from '@nestjs/testing'
import { FactorialService } from './factorial.service'

describe('FactorialService', () => {
  let service

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FactorialService]
    }).compile()

    service = module.get(FactorialService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
