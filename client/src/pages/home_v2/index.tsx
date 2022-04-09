import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import type { QueryBetaResponse } from "~/api/@types";
import { Form } from "~/components/custom-form/form";
import { Input } from "~/components/custom-form/input";
import { Loading } from "~/components/loading";
import { SearchResult } from "~/components/search-result";
import { serverState } from "~/store/server";
import { apiClient } from "~/utils/api-client";
import styles from "./home.module.scss";

type HomePageV2ContentProps = {
  searchText: string;
  itemNum?: number;
};

const HomePageV2Content: React.VFC<HomePageV2ContentProps> = ({
  searchText,
  itemNum,
}) => {
  const [data, setData] = useState<QueryBetaResponse | undefined>(undefined);
  const { isAlive } = useRecoilValue(serverState);

  useEffect(() => {
    if ( searchText !== undefined && searchText !== "") {
      apiClient.query_beta
        .$get({
          query: {
            user_req: searchText,
            iter_num: itemNum,
          },
        })
        .then((response) => {
          setData(response);
        })
        .catch((error) => {
          // TODO: ダイアログかなんか出す
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }, [searchText, isAlive]);

  if (!isAlive) {
    return <Loading />;
  }

  if (data === undefined) {
    return <Loading />;
  }

  return (
    <>
      <SearchResult data={data} />
    </>
  );
};

type FormValues = {
  userReq: string;
};


export const HomeV2: React.VFC = () => {

  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const onSubmit = ({ userReq }: FormValues) => {
    if (typeof userReq !== "undefined") {
      setSearchText(userReq);
    }
  };

  return (
    <div className={styles.homePage}>
      <Form onSubmit={onSubmit}>
        <Input
          className={styles.searchWordInput}
          type="text"
          placeholder="検索するワードを入力してね〜"
          name="userReq"
        />
      </Form>

      {/* とりあえず検索なしで雑に表示するよ */}
      {typeof searchText !== "undefined" && searchText !== "" ? (
        <HomePageV2Content searchText={searchText} itemNum={40} />
      ) : (
        <div>♡ なにがでるかな ♡</div>
      )}
    </div>
  );
};
