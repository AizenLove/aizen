/* eslint-disable */
export type HTTPValidationError = {
  detail?: ValidationError[] | undefined
}

export type QueryBetaResponse = {
  id: string
  affiliateURL: string
  affiliateURLsp: string
  base_url: string
  date: string
  describe: string
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
