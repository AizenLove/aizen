/* eslint-disable */
export type HTTPValidationError = {
  detail?: ValidationError[] | undefined
}

export type QueryBetaResponse = {
  id: string
  affiliateURL: string
  affiliateURLsp?: string | undefined
  base_url: string
  date: string
  describe: string
  image: string
  sampleMovieURL?: SampleMovieUrl | undefined
  tags: string[]
  title: string
}

export type SampleMovieUrl = {
  pc_flag: number
  size_476_306: string
  size_560_360: string
  size_644_414: string
  size_720_480: string
  sp_flag: number
}

export type ValidationError = {
  loc: (Partial<string & number>)[]
  msg: string
  type: string
}

export type WarmUpResponse = {
  alive: boolean
}
