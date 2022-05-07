import type { MakeGenerics } from "@tanstack/react-location";

type SearchParams<T extends Record<string, unknown>> = T['Search'] extends object ? T['Search'] : never

export type ResultPageGenerics = MakeGenerics<{
  Search: {
    search: string
  }
}>

export type ResultPageSearchParams = SearchParams<ResultPageGenerics>
