import { useEffect, useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { useRecoilValue } from "recoil";
import type { QueryBetaResponse } from "~/api/@types";
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
  const [currentText, setCurrentText] = useState("");
  const [data, setData] = useState<QueryBetaResponse | undefined>(undefined);
  const { isAlive } = useRecoilValue(serverState);

  useEffect(() => {
    if (searchText !== undefined && searchText !== "") {
      setCurrentText(searchText);
      apiClient.query_beta
        .$get({
          query: {
            user_req: searchText,
            iter_num: itemNum,
          },
        })
        .then((response) => {
          // 次のリクエスト投げてたらそっちを待つよ
          if (currentText !== searchText) return;

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

export const HomeV2: React.VFC = () => {
  const { control } = useForm<{
    searchText: string;
  }>();
  const searchText = useWatch({
    control,
    name: "searchText",
    defaultValue: "",
  });

  return (
    <div className={styles.homePage}>
      <Controller
        render={({ field: { onChange, value } }) => (
          <input
            className={styles.searchWordInput}
            onChange={onChange}
            value={value}
          />
        )}
        name="searchText"
        control={control}
        defaultValue=""
      />

      {/* とりあえず検索なしで雑に表示するよ */}
      {typeof searchText !== "undefined" && searchText !== "" ? (
        <HomePageV2Content searchText={searchText} itemNum={1} />
      ) : (
        <div>♡ なにがでるかな ♡</div>
      )}
    </div>
  );
};
