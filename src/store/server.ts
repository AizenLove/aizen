import { atom } from "recoil";

export type ServerState = {
  isAlive: boolean;
};

export const serverState = atom<ServerState>({
  key: "serverState",
  default: {
    isAlive: false,
  },
});
