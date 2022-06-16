const loadingStateStatus = Symbol();

export type Loading = {
  [loadingStateStatus]: "loading";
  isLoading: true;
};
export type Loaded<T> = {
  [loadingStateStatus]: "loaded";
  value: T;
  isLoading: false;
};

export type LoadableState<T> = Loading | Loaded<T>;

export const loading = (): Loading => ({
  [loadingStateStatus]: "loading",
  isLoading: true,
});

export const loaded = <T>(value: T): Loaded<T> => ({
  [loadingStateStatus]: "loaded",
  value: value,
  isLoading: false,
});
