import type { QueryBetaResponse } from "~/api/@types";
import styles from "./search-result.module.scss";

type SearchResultProps = {
  data: QueryBetaResponse;
};

export const SearchResult: React.VFC<SearchResultProps> = ({ data }) => {
  return (
    <div className={styles.resultContainer}>
      <img src={data.image} />
      <h2>{data.title}</h2>
      <a href={data.base_url}>FANZA で確認する</a>
      <div>{data.describe}</div>
    </div>
  );
};
