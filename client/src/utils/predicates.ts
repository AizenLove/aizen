import type { ResultPageGenerics, ResultPageSearchParams } from './../types/routes';

const isString = (value: unknown): value is string => typeof value === 'string';
const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);
const hasNotUnlistedProperties = (listedKeys: string[]) =>
  (value: Record<string, unknown>): boolean =>
    Object.keys(value).every(key => listedKeys.includes(key))

/**
 * Check if a variable is of type {@link ResultPageGenerics} and narrow it down to that type if the check passes.
 * This function is automatically generated using [type-predicates-generator](https://www.npmjs.com/package/type-predicates-generator).
 * @param arg_0 Argument to inspect.
 * @return `true` if the argument is of type {@link ResultPageGenerics}, `false` otherwise.
 */
export const isResultPageGenerics = (arg_0: unknown): arg_0 is ResultPageGenerics => isObject(arg_0) && hasNotUnlistedProperties(['Search'])(arg_0) &&
  ('Search' in arg_0 && ((arg_1: unknown): boolean => isObject(arg_1) && hasNotUnlistedProperties(['search'])(arg_1) &&
  ('search' in arg_1 && (isString)(arg_1['search'])))(arg_0['Search']));
/**
 * Assert if a variable is of type {@link ResultPageGenerics} and throws a TypeError if the assertion fails.
 * This function is automatically generated using [type-predicates-generator](https://www.npmjs.com/package/type-predicates-generator).
 * @param value Argument to inspect.
 * @throw TypeError if the given argument is not compatible with the type {@link ResultPageGenerics}.
 */
export function assertIsResultPageGenerics(value: unknown): asserts value is ResultPageGenerics {
  if (!isResultPageGenerics(value)) throw new TypeError(`value must be ResultPageGenerics but received ${value}`)
};
/**
 * Check if a variable is of type {@link ResultPageSearchParams} and narrow it down to that type if the check passes.
 * This function is automatically generated using [type-predicates-generator](https://www.npmjs.com/package/type-predicates-generator).
 * @param arg_0 Argument to inspect.
 * @return `true` if the argument is of type {@link ResultPageSearchParams}, `false` otherwise.
 */
export const isResultPageSearchParams = (arg_0: unknown): arg_0 is ResultPageSearchParams => isObject(arg_0) && hasNotUnlistedProperties(['search'])(arg_0) &&
  ('search' in arg_0 && (isString)(arg_0['search']));
/**
 * Assert if a variable is of type {@link ResultPageSearchParams} and throws a TypeError if the assertion fails.
 * This function is automatically generated using [type-predicates-generator](https://www.npmjs.com/package/type-predicates-generator).
 * @param value Argument to inspect.
 * @throw TypeError if the given argument is not compatible with the type {@link ResultPageSearchParams}.
 */
export function assertIsResultPageSearchParams(value: unknown): asserts value is ResultPageSearchParams {
  if (!isResultPageSearchParams(value)) throw new TypeError(`value must be ResultPageSearchParams but received ${value}`)
};