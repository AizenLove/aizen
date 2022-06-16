import classNames from "classnames";
import { TiWarning } from "react-icons/ti";
import type { MessageKind } from "../../store/message";
import type { PropsWithChildren } from "react";
import styles from "./message-card.module.scss";

export type MessageCardProps = PropsWithChildren<{
  kind: MessageKind;
}>;

export const MessageCard: React.VFC<MessageCardProps> = ({
  children,
  kind,
}) => {
  return (
    <div className={classNames(styles.container, styles[`${kind}Kind`])}>
      <div className={styles.icon}>
        <TiWarning />
      </div>
      <div className={styles.message}>{children}</div>
    </div>
  );
};
