import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { serverState } from "~/store/server";
import { apiClient } from "~/utils/api-client";

type ServerCheckProps = React.PropsWithChildren<Record<string, unknown>>;

export const ServerCheck: React.VFC<ServerCheckProps> = ({ children }) => {
  const [{ isAlive }, setServerValue] = useRecoilState(serverState);

  useEffect(() => {
    if (!isAlive) {
      const timerId = window.setInterval(() => {
        apiClient.warm_up
          .$get()
          .then(({ alive }) => {
            if (alive) {
              setServerValue({ isAlive: alive });
              window.clearInterval(timerId);
            }
          })
          .catch((_err) => {
            // eslint-disable-next-line no-console
            console.warn("Server is not alive. Retrying...");
          });
      }, 500);
    }
  }, []);

  return <>{children}</>;
};
