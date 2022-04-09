/* eslint-disable */
export type HTTPValidationError = {
  detail?: ValidationError[] | undefined
}

export type QueryBetaResponse = {
  id: string
  title: string
  base_url: string
  describe: string
  image: string
  tags: string[]
}

export type ValidationError = {
  loc: string[]
  msg: string
  type: string
}

export type WarmUpResponse = {
  alive: boolean
}
