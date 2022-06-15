import classNames from "classnames";
import styles from "./layout.module.scss";

export type LayoutProps = React.PropsWithChildren<Record<string, unknown>>;

export const layoutId = "layout-root";

export const Layout: React.VFC<LayoutProps> = ({ children }) => {
  return (
    <div
      id={layoutId}
      className={classNames(styles.pageContainer, "m-context")}
    >
      <main className={styles.main}>
        <div>{children}</div>
      </main>
      <footer className={styles.footer}>
        <small>© Nihon-Uni.admiral-Honda</small>
      </footer>
      <div className="m-z2">{/* Portal 経由でモーダルを置く */}</div>
    </div>
  );
};
