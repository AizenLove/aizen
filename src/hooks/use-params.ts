import { useMatch, useSearch } from "@tanstack/react-location";
import type { JsonSerializable } from "~/types/json";

export const useParams = <
  PathParams extends Record<string, string>,
  QueryParams extends Record<string, JsonSerializable>
>(): { pathParams: PathParams; queryParams: QueryParams } => {
  const queryParams = useSearch<{ Search: QueryParams }>();
  const pathParams = useMatch<{ Params: PathParams }>();

  return {
    pathParams: pathParams as unknown as PathParams,
    queryParams: queryParams as unknown as QueryParams,
  };
};
