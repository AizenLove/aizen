import { Link } from "@tanstack/react-location";
import classNames from "classnames";
import styles from "./layout.module.scss";

type Props = React.PropsWithChildren<Record<string, unknown>>;

export const layoutId = "layout-root";

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <div
      id={layoutId}
      className={classNames(styles.pageContainer, "m-context")}
    >
      {/* そんな複雑じゃないしとりあえず直接で良いっしょ */}
      <header className={classNames(styles.header, "m-z1")}>
        <h1>aizen</h1>
        <nav>
          <ul className={styles.headerNavList}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/home_v2">HOME V2</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div>{children}</div>
      </main>
      <footer className={styles.footer}>フッターだよ</footer>
      <div className="m-z2">{/* Portal 経由でモーダルを置く */}</div>
    </div>
  );
};
