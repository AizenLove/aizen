import styles from "./loading.module.scss";

export type LoadingProps = Record<string, never>;

export const Loading: React.VFC<LoadingProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.atomSpinner}>
        <div className={styles.spinnerInner}>
          <div className={styles.spinnerLine}></div>
          <div className={styles.spinnerLine}></div>
          <div className={styles.spinnerLine}></div>
          <div className={styles.spinnerCircle}>&#9679;</div>
        </div>
      </div>
    </div>
  );
};
