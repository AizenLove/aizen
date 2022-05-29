import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import type { QueryBetaResponse } from "~/api/@types";
import { Layout } from "~/components/layout";
import { Link } from "~/components/link/index.stories";
import { Loading } from "~/components/loading";
import { SearchResult } from "~/components/search-result";
import { useNavigate } from "~/hooks/use-navigate";
import { useParams } from "~/hooks/use-params";
import { serverState } from "~/store/server";
import { unEmptyStringFactory } from "~/types/branded/un-empty-string";
import type { UnEmptyString } from "~/types/branded/un-empty-string";
import type { ResultPageGenerics } from "~/types/routes";
import { apiClient } from "~/utils/api-client";
import { isResultPageSearchParams } from "~/utils/predicates";
import styles from "./result.module.scss";

type ResultPageContentProps = {
  searchText: UnEmptyString;
};

const ResultPageContent: React.VFC<ResultPageContentProps> = ({
  searchText,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<QueryBetaResponse | undefined>(undefined);
  const navigate = useNavigate();

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
      .catch(() => {
        // TODO: ダイアログかなんか出す
        navigate({
          to: "/",
        });
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
  const { queryParams } = useParams<
    Record<string, never>,
    ResultPageGenerics["Search"]
  >();
  const { isAlive } = useRecoilValue(serverState);
  const navigate = useNavigate();

  if (!isResultPageSearchParams(queryParams)) {
    navigate({
      to: "/",
      replace: false,
    });
    // メッセージ出すと親切かもね
    // FIXME: 画面遷移走るタイミングで一瞬だけこのページコンポーネント+クエリが別ページ用になってここ呼ばれて落ちてるっぽい
    return null;
  }

  const searchQuery = (() => {
    try {
      return unEmptyStringFactory.build(queryParams.search);
    } catch (err) {
      return undefined;
    }
  })();

  if (searchQuery === undefined) {
    navigate({
      to: "/",
    });
    // メッセージ出すと親切かもね
    return null;
  }

  return (
    <Layout>
      <div className={styles.resultPage}>
        {isAlive ? <ResultPageContent searchText={searchQuery} /> : <Loading />}
      </div>
    </Layout>
  );
};
