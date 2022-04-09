import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './query-beta'
import type { Methods as Methods1 } from './warm_up'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/query-beta/'
  const PATH1 = '/warm_up/'
  const GET = 'GET'

  return {
    query_beta: {
      /**
       * @returns Successful Response
       */
      get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * @returns Successful Response
       */
      $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    warm_up: {
      /**
       * @returns Successful Response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns Successful Response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
