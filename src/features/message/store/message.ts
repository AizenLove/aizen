import { atom } from "recoil";

export type MessageKind = "error"; // 必要になったら足して
export type Message = {
  id: string;
  kind: MessageKind;
  text: string;
};

export type MessageState = {
  messageQueue: Message[];
};

export const messageState = atom<MessageState>({
  key: "messageState",
  default: {
    messageQueue: [],
  },
});
