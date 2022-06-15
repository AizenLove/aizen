import type { QueryBetaResponse } from "~/api/@types";
import { Layout } from "~/components/layout";
import { Loading } from "~/components/loading";
import { SearchResult } from "~/features/search/components/search-result";
import type { UnEmptyString } from "~/types/branded/un-empty-string";
import type { LoadableState } from "~/utils/loadable-state";
import styles from "./search-result.module.scss";

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
        <div className={styles.resultPage}>
          <SearchResult data={searchedData} />
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};
