import type { ValueObject} from './index';
import { createValueObjectFactory, ValueObjectValidator } from './index'

export type UnEmptyString = ValueObject<string, 'UnEmptyString'>
export const unEmptyStringFactory = createValueObjectFactory(
  new ValueObjectValidator<string, UnEmptyString>((value) => value !== "")
)
