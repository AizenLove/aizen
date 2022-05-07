export type ValueObject<T, U extends string> = T & { __kind: U }
export type Validate<T> = (value: T) => boolean

export class ValueObjectValidationError extends Error {}

export class ValueObjectValidator<Primitive, ValObj extends Primitive> {
  public constructor(protected validate: Validate<Primitive>) {}

  public build(value: Primitive): ValObj {
    this.asserts(value)
    return value
  }

  public asserts(value: Primitive): asserts value is ValObj {
    if (!this.validate(value)) {
      throw new ValueObjectValidationError()
    }
  }
}

export const createValueObjectFactory = <
  Primitive,
  ValObj extends Primitive,
  Additional extends {
    [K: string]: (
      context: Context,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 制約ではないので許容
      ...args: any[]
    ) => // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 制約ではないので許容
    any
  },
  ResolvedMethod = {
    [K in keyof Additional]: Additional[K] extends (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 制約ではないので許容
      context: any,
      ...args: infer Args
    ) => infer Ret
      ? (...args: Args) => Ret
      : never
  },
  Context = {
    validator: ValueObjectValidator<Primitive, ValObj>
    build: (value: Primitive) => ValObj
  }
>(
  validator: ValueObjectValidator<Primitive, ValObj>,
  additional?: Additional
): ResolvedMethod & Context => {
  const build = (value: Primitive): ValObj => {
    return validator.build(value)
  }

  const context = {
    build,
    validator,
  } as unknown as Context

  const resolved = (additional === undefined ? {} : Object.keys(additional).reduce(
    (s, key: keyof Additional) => {
      const f = additional[key]
      if (f === undefined) return s

      return {
        ...s,
        [key]: (...args: unknown[]): unknown => {
          return f(context, ...args)
        },
      }
    },
    {}
  )) as ResolvedMethod

  return {
    ...context,
    ...resolved,
  }
}
