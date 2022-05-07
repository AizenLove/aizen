import { useNavigate, useSearch, Link } from '@tanstack/react-location'
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import type { QueryBetaResponse } from "~/api/@types";
import { Loading } from "~/components/loading";
import { SearchResult } from "~/components/search-result";
import { serverState } from "~/store/server";
import type { ResultPageGenerics } from '~/types/routes'
import { apiClient } from "~/utils/api-client";
import { isResultPageSearchParams } from '~/utils/predicates';
import type { UnEmptyString} from '~/value-object/un-empty-string';
import { unEmptyStringFactory } from '~/value-object/un-empty-string';
import styles from "./result.module.scss";

type ResultPageContentProps = {
  searchText: UnEmptyString;
};

const ResultPageContent: React.VFC<ResultPageContentProps> = ({
  searchText,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<QueryBetaResponse | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    apiClient.query_beta
      .$get({
        query: {
          user_req: searchText,
          iter_num: 40 /* FIXME */,
        },
      })
      .then((response) => {
        setIsLoading(false);
        setData(response);
      })
      .catch((error) => {
        // TODO: ダイアログかなんか出す
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, [searchText]);

  if (isLoading) {
    return <Loading />;
  }

  if (data === undefined) {
    // レコメンドなので見つからんことはないが、一応
    return <div>見つかりませんでした :cry:</div>;
  }

  return (
    <div>
      <SearchResult data={data} />
      <Link to="/">TOPへ</Link>
    </div>
  );
};

export const ResultPage: React.VFC = () => {
  const navigate = useNavigate()
  const query = useSearch<ResultPageGenerics>()
  const { isAlive } = useRecoilValue(serverState);

  if (!isResultPageSearchParams(query)) {
    navigate({
      to: '/',
      replace: true
    })
    // メッセージ出すと親切かもね
    return null;
  }

  const searchQuery = (() => {
    try {
      return unEmptyStringFactory.build(query.search)
    } catch (err) {
      return undefined
    }
  })()

  if (searchQuery === undefined) {
    navigate({
      to: '/',
      replace: true
    })
    // メッセージ出すと親切かもね
    return null;
  }

  return (
    <div className={styles.resultPage}>
      {isAlive ? <ResultPageContent searchText={searchQuery} /> : <Loading />}
    </div>
  );
};
