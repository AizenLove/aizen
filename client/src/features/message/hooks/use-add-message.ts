import { useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import type { Message, MessageKind } from "../store/message";
import { messageState } from "../store/message";

export const useAddMessage = () => {
  const setMessageValue = useSetRecoilState(messageState);

  return (kind: MessageKind, text: string, timeLimit = 5000): void => {
    const message: Message = {
      id: uuidv4(),
      kind,
      text,
    };

    setMessageValue((current) => ({
      messageQueue: [message, ...current.messageQueue],
    }));

    setTimeout(() => {
      setMessageValue((current) => ({
        messageQueue: current.messageQueue.filter(
          (item) => item.id === message.id
        ),
      }));
    }, timeLimit);
  };
};
