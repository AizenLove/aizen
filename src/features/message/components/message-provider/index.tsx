import { useRecoilValue } from "recoil";
import type { PropsWithChildren } from "react";
import { Portal } from "~/components/layout/portal";
import { messageState } from "~/features/message/store/message";
import type { EmptyProp } from "~/types/util";
import { MessageCard } from "../message-card";
import styles from "./message-provider.module.scss";

export type MessageProviderProps = PropsWithChildren<EmptyProp>;

export const MessageProvider: React.VFC<MessageProviderProps> = ({
  children,
}) => {
  const messageValue = useRecoilValue(messageState);

  return (
    <>
      {children}
      <Portal>
        <ul className={styles.messages}>
          {messageValue.messageQueue.map(({ id, kind, text }) => (
            <li key={id}>
              <MessageCard kind={kind}>{text}</MessageCard>
            </li>
          ))}
        </ul>
      </Portal>
    </>
  );
};
