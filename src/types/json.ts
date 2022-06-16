export type JsonSerializable =
  | string
  | number
  | boolean
  | null
  | { [K: string]: JsonSerializable }
  | JsonSerializable[];
