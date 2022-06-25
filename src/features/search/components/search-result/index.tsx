import { useCallback } from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import { Button } from "~/components/button";
import type { FanzaVideo } from "~/features/search/services";
import { useNavigate } from "~/hooks/use-navigate";
import styles from "./search-result.module.scss";

export type SearchResultProps = {
  fanzaVideo: FanzaVideo;
};

export const SearchResult: React.VFC<SearchResultProps> = ({ fanzaVideo }) => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate({ to: "/" });
  }, []);

  return (
    <div className={styles.resultContainer}>
      <div className={styles.preHeading}>あなたの求めるAVは・・・</div>
      <h2 className={styles.heading}>{fanzaVideo.title}</h2>
      <img className={styles.image} src={fanzaVideo.imageUrl} />
      <div className={styles.description}>{fanzaVideo.description}</div>
      <div className={styles.moveLinkWrapper}>
        <a className={styles.moveFanzaLink} href={fanzaVideo.detailUrl}>
          <RiExternalLinkLine />
          FANZA で確認する
        </a>
      </div>

      {fanzaVideo.videoUrl !== undefined ? (
        <iframe src={fanzaVideo.videoUrl} width="100%"></iframe>
      ) : (
        <div>サンプル動画が提供されていません。</div>
      )}
      <div className={styles.buttonWrapper}>
        <Button theme="white" onClick={onClick}>
          TOPへ
        </Button>
      </div>
    </div>
  );
};
