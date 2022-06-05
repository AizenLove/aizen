/* eslint-disable */
export type HTTPValidationError = {
  detail?: ValidationError[] | undefined
}

export type QueryBetaResponse = {
  base_url: string
  describe: string
  id: string
  image: string
  tags: string[]
  title: string
}

export type ValidationError = {
  loc: (Partial<string & number>)[]
  msg: string
  type: string
}

export type WarmUpResponse = {
  alive: boolean
}
