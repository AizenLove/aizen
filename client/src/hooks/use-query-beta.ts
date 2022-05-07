import useAspidaSWR from "@aspida/swr";
import { apiClient } from "~/utils/api-client";

export const useQueryBeta = (userReq: string, itemNum?: number) => {
  const { data, isValidating } = useAspidaSWR(apiClient.query_beta, "$get", {
    query: {
      user_req: userReq,
      iter_num: itemNum,
    },
  });

  return {
    data: data ?? undefined,
    isValidating,
  };
};
