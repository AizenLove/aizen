import { range } from "rambda";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Form } from "~/components/custom-form/form";
import { Input, Select } from "~/components/custom-form/input";
import { Loading } from "~/components/loading";
import { SearchResult } from "~/components/search-result";
import { useQueryBeta } from "~/hooks/use-query-beta";
import { serverState } from "~/store/server";
import styles from "./home.module.scss";

type HomePageContentProps = {
  userReq: string;
  itemNum?: number;
};

const HomePageContent: React.VFC<HomePageContentProps> = ({
  userReq,
  itemNum,
}) => {
  const { data, isValidating } = useQueryBeta(userReq, itemNum);

  if (data === undefined || isValidating) {
    return <Loading />;
  }

  return <SearchResult data={data} />;
};

type FormValues = {
  userReq: string;
  itemNum: number;
};

export const Home: React.VFC = () => {
  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const [itemNum, setItemNum] = useState<number>(1);
  const { isAlive } = useRecoilValue(serverState);

  const onSubmit = ({ userReq, itemNum }: FormValues) => {
    if (typeof userReq !== "undefined") {
      setSearchText(userReq);
      setItemNum(itemNum);
    }
  };

  return (
    <div className={styles.homePage}>
      <Form onSubmit={onSubmit}>
        <Select
          className={styles.itemNumInput}
          name="itemNum"
          options={range(1, 10).map((i) => String(i))}
        />
        <Input
          className={styles.searchWordInput}
          type="text"
          placeholder="検索するワードを入力してね〜"
          name="userReq"
        />

        <Input
          className={styles.submitButton}
          type="submit"
          value="検索する"
          disabled={!isAlive}
        />
      </Form>

      {/* とりあえず検索なしで雑に表示するよ */}
      {typeof searchText !== "undefined" ? (
        <HomePageContent userReq={searchText} itemNum={itemNum} />
      ) : (
        <div>♡ なにがでるかな ♡</div>
      )}
    </div>
  );
};
