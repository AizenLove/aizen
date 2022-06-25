import { useParams } from "~/hooks/use-params";
import type { UnEmptyString } from "~/types/branded/un-empty-string";
import { unEmptyStringFactory } from "~/types/branded/un-empty-string";
import type { ResultPageGenerics } from "~/types/routes";
import { isResultPageSearchParams } from "~/utils/predicates";
import type { CommonNg, Result } from "~/utils/result";
import { isNg, ng, ok } from "~/utils/result";

export const useSearchQuery = (): Result<
  UnEmptyString,
  CommonNg<"NO_QUERY" | "QUERY_EMPTY">
> => {
  const { queryParams } = useParams<
    Record<string, never>,
    ResultPageGenerics["Search"]
  >();
  if (!isResultPageSearchParams(queryParams)) {
    return ng({
      kind: "NO_QUERY",
      module: "useSearchQuery",
    } as const);
  }

  const searchQuery = ((): Result<UnEmptyString, CommonNg<"QUERY_EMPTY">> => {
    try {
      return ok(unEmptyStringFactory.build(queryParams.search));
    } catch (err) {
      return ng({
        kind: "QUERY_EMPTY" as const,
        module: "useSearchQuery",
        err: err,
      });
    }
  })();

  if (isNg(searchQuery)) {
    return searchQuery;
  }

  return searchQuery;
};
