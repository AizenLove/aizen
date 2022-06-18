import { useNavigate as useNavigateReactLocation } from "@tanstack/react-location";
import type { JsonSerializable } from "~/types/json";

export type IsNever<T> = T[] extends never[] ? true : false;

export const useNavigate = () => {
  const navigate = useNavigateReactLocation();

  return <Params extends Record<string, JsonSerializable> | never = never>(
    args: {
      to: string;
      replace?: boolean;
    } & (IsNever<Params> extends true ? { params?: never } : { params: Params })
  ): void => {
    const { to, params, replace } = {
      params: undefined,
      replace: false,
      ...args,
    };

    navigate({
      to,
      search: (old) => ({
        ...old,
        ...(typeof params === "undefined" ? {} : params),
      }),
      replace,
    });
  };
};
