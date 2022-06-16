import { expect, it, describe } from 'vitest'

describe('vitest 自体が動くか確認するテスト', () => {
  it('自明なテスト', () => {
    expect(true).toBe(true)
  })

  it('自明なテスト(async)', () => {
    expect(true).toBe(true)
  })
})
