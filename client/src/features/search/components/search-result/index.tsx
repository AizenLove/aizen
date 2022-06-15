import type { QueryBetaResponse } from "~/api/@types";
import { Link } from "~/components/link";
import { Loading } from "~/components/loading";
import type { LoadableState } from "~/utils/loadable-state";
import styles from "./search-result.module.scss";

export type SearchResultProps = {
  data: LoadableState<QueryBetaResponse>;
};

export const SearchResult: React.VFC<SearchResultProps> = ({ data }) => {
  // 一時的ににハードコーディングするよ
  const cid = "nygw0006";
  return (
    <div className={styles.resultContainer}>
      {data.isLoading ? (
        <Loading />
      ) : (
        <>
          <div>あなたの求めるAVは・・・</div>
          <h2>{data.value.title}</h2>
          <img src={data.value.image} />
          <div className="descriptionContainer">
            <div>{data.value.describe}</div>
            <a href={data.value.base_url}>FANZA で確認する</a>
          </div>
          <video
            style={{
              width: "90%",
            }}
            controls={true}
            data-binding="play"
            data-service="digital"
            data-mode="detail"
            autoPlay={false}
            src={`https://cc3001.dmm.co.jp/litevideo/freepv/n/nyg/${cid}/${cid}_mhb_w.mp4`}
          ></video>
          <Link to="/">TOPへ</Link>
        </>
      )}
    </div>
  );
};
