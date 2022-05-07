import type { QueryBetaResponse } from "~/api/@types";
import styles from "./search-result.module.scss";

type SearchResultProps = {
  data: QueryBetaResponse;
};

export const SearchResult: React.VFC<SearchResultProps> = ({ data }) => {
  // 一時的ににハードコーディングするよ
  const cid = `nygw0006`;
  return (
    <div className={styles.resultContainer}>
      <div>あなたの求めるAVは・・・</div>
      <h2>{data.title}</h2>
      <img src={data.image} />
      <div className="descriptionContainer">
        <div>{data.describe}</div>
        <a href={data.base_url}>FANZA で確認する</a>
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
    </div>
  );
};
