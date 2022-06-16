type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false;
type IsUndefined<T> = T[] extends undefined[]
  ? IsAny<T> extends true
    ? false
    : true
  : false;

export type ResultOk<T> = {
  __type: "ok";
  value: T;
};

export type ResultNg<Ng> = {
  __type: "ng";
  value: Ng;
};

export type Result<T, Ng> = ResultOk<T> | ResultNg<Ng>;

export function ok<T = undefined>(
  ...args: IsUndefined<T> extends true ? [] : [T]
): ResultOk<T> {
  const [value] = args ?? [];
  return {
    __type: "ok",
    value: value as T,
  };
}

export function ng<Ng>(value: Ng): ResultNg<Ng> {
  return {
    __type: "ng",
    value,
  };
}

export function isOk<T, Ng>(result: Result<T, Ng>): result is ResultOk<T> {
  return result.__type === "ok";
}

export function isNg<T, Ng>(result: Result<T, Ng>): result is ResultNg<Ng> {
  return result.__type === "ng";
}

export type CommonNg<Kind extends string | undefined = undefined> =
  (Kind extends string
    ? {
        kind: Kind;
      }
    : {
        kind?: string;
      }) & {
    module: string;
    error?: Error;
  };
