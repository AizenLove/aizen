import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import type { QueryBetaResponse } from "~/api/@types";
import { useSearchQuery } from "~/features/search/hooks/use-search-query";
import { useNavigate } from "~/hooks/use-navigate";
import { SearchResultPageContent } from "~/page-contents/search-result";
import { serverState } from "~/store/server";
import { apiClient } from "~/utils/api-client";
import { loaded, loading } from "~/utils/loadable-state";
import type { LoadableState } from "~/utils/loadable-state";
import { isNg } from "~/utils/result";

export const ResultPage: React.VFC = () => {
  const { isAlive } = useRecoilValue(serverState);
  const queryResult = useSearchQuery();
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState<
    LoadableState<QueryBetaResponse>
  >(loading());
  useEffect(() => {
    if (isNg(queryResult)) {
      // TODO: エラーメッセージを表示する
      console.error("query 拾えなかった...", queryResult);
      navigate({
        to: "/",
      });
      return;
    }

    apiClient.query_beta
      .$get({
        query: {
          user_req: queryResult.value,
          iter_num: 40,
        },
      })
      .then((response) => {
        setSearchResult(loaded(response));
      })
      .catch(() => {
        navigate({
          to: "/",
        });
      });
  }, []);

  if (isNg(queryResult)) {
    return null;
  }

  return (
    <SearchResultPageContent
      isAlive={isAlive}
      searchText={queryResult.value}
      searchedData={searchResult}
    />
  );
};
