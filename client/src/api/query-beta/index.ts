/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  get: {
    query: {
      user_req: string
      iter_num?: number | undefined
    }

    status: 200
    /** Successful Response */
    resBody: Types.QueryBetaResponse
  }
}
