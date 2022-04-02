import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './_warm_up'
import type { Methods as Methods1 } from './query-beta'
import type { AspidaClient, BasicHeaders } from 'aspida'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/query-beta'
  const GET = 'GET'

  return {
    _warm_up: (val0: number | string) => {
      const prefix0 = `/${val0}`

      return {
        /**
         * @returns Successful Response
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).text(),
        /**
         * @returns Successful Response
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).text().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    },
    query_beta: {
      /**
       * @returns Successful Response
       */
      get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * @returns Successful Response
       */
      $get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
