import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import type { QueryBetaResponse } from "~/api/@types";
import { Form } from "~/components/custom-form/form";
import { Input } from "~/components/custom-form/input";
import { Loading } from "~/components/loading";
import { SearchResult } from "~/components/search-result";
import { serverState } from "~/store/server";
import { apiClient } from "~/utils/api-client";
import type { SemVersion } from "~/utils/user-agent";
import { detectInAppBrowser, parseIosVersion } from "~/utils/user-agent";
import styles from "./home.module.scss";

type HomePageV2ContentProps = {
  searchText: string | undefined;
  itemNum?: number;
};

const HomePageV2Content: React.VFC<HomePageV2ContentProps> = ({
  searchText,
  itemNum,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<QueryBetaResponse | undefined>(undefined);
  const { isAlive } = useRecoilValue(serverState);

  useEffect(() => {
    if (searchText !== undefined && searchText !== "") {
      setIsLoading(true);
      apiClient.query_beta
        .$get({
          query: {
            user_req: searchText,
            iter_num: itemNum,
          },
        })
        .then((response) => {
          setIsLoading(false);
          setData(response);
        })
        .catch((error) => {
          // TODO: ダイアログかなんか出す
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }, [searchText, isAlive]);

  if (!isAlive || searchText === "" || searchText === undefined) {
    return <div>♡ なにがでるかな ♡</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (data === undefined) {
    // レコメンドなので見つからんことはないが、一応
    return <div>見つかりませんでした :cry:</div>;
  }

  return <SearchResult data={data} />;
};

type FormValues = {
  userReq: string;
};

const isSpecialSafari = ({ major, minor, patch }: SemVersion): boolean =>
  major === 15 && (minor <= 3 || (minor === 4 && patch === 0));

export const HomeV2: React.VFC = () => {
  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const [isActive, setIsActive] = useState(false);

  const onSubmit = ({ userReq }: FormValues) => {
    if (typeof userReq !== "undefined") {
      setSearchText(userReq);
    }
  };

  const [iosVersion, browserKind] = useMemo(() => {
    return [
      parseIosVersion(window.navigator.userAgent),
      detectInAppBrowser(window.navigator.userAgent),
    ] as const;
  }, []);

  return (
    <div className={styles.homePage}>
      {/* とりあえず検索なしで雑に表示するよ */}
      <HomePageV2Content searchText={searchText} itemNum={40} />

      <div
        className={classNames(
          styles.formContainer,
          isActive ? styles.isActive : null,
          browserKind === "maybe_safari_ios" &&
            iosVersion !== null &&
            isSpecialSafari(iosVersion)
            ? styles.isSpecialSafari
            : null
        )}
      >
        <Form onSubmit={onSubmit} className={styles.form}>
          <Input
            className={styles.searchWordInput}
            type="text"
            placeholder="検索するワードを入力してね〜"
            name="userReq"
            onFocus={() => {
              setIsActive(!isActive);
            }}
            onBlur={() => {
              setIsActive(false);
            }}
          />
        </Form>
      </div>
    </div>
  );
};
