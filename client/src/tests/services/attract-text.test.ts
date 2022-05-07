import { range } from 'rambda'
import { expect, it, describe, beforeEach } from 'vitest'
import { getRandomAttractTextClosure, attractTexts } from '~/services/attract-text'

describe('getRandomAttractTextClosure', () => {
  let getRandomAttractText: ReturnType<typeof getRandomAttractTextClosure>

  beforeEach(() => {
    getRandomAttractText = getRandomAttractTextClosure()
  })

  it('1件取得できる', async () => {
    expect(typeof getRandomAttractText()).toBe('string')
  })

  it('元配列以上の回数実行できる', async () => {
    range(1, attractTexts.length + 1).forEach(() => {
      expect(typeof getRandomAttractText()).toBe('string')
    });
  })

  it('元配列回では重複しない', async () => {
    let prev = getRandomAttractText();

    range(1, attractTexts.length - 1).forEach(() => {
      const current = getRandomAttractText()
      expect(current).not.toBe(prev)
      prev = current
    });
  })
})
