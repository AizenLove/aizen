import type { QueryBetaResponse } from "~/api/@types";
import { Layout } from "~/components/layout";
import { Loading } from "~/components/loading";
import { SearchResult } from "~/features/search/components/search-result";
import { convertFanzaVideo } from "~/features/search/services/convert-fanza-video";
import type { UnEmptyString } from "~/types/branded/un-empty-string";
import type { LoadableState } from "~/utils/loadable-state";

export type SearchResultPageContentProps = {
  isAlive: boolean;
  searchedData: LoadableState<QueryBetaResponse>;
  searchText: UnEmptyString;
};

export const SearchResultPageContent: React.VFC<
  SearchResultPageContentProps
> = ({ searchedData, isAlive }) => {
  return (
    <Layout>
      {isAlive ? (
        searchedData.isLoading ? (
          <Loading />
        ) : (
          <SearchResult fanzaVideo={convertFanzaVideo(searchedData.value)} />
        )
      ) : (
        <Loading />
      )}
    </Layout>
  );
};
