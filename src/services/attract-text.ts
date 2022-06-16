import { getRandomInt } from "~/utils/random"

export const attractTexts = [
  '彼女のお姉さんとエッチがしたい',
  '世話をしてくれる義理の姉と炬燵でイチャイチャしたい',
  '電車ですれ違うお姉さんを調教したい',
]

export const getRandomAttractTextClosure = () => {
  const textStore = [...attractTexts]

  return (): string => {
    if (textStore.length === 0) {
      textStore.push(...attractTexts)
    }

    const index = getRandomInt(textStore.length - 1)
    return textStore.splice(index, 1)[0] as string  // length = 0 のときは補充してるので undefined は取らない
  }
}
export const getRandomAttractText = getRandomAttractTextClosure()
