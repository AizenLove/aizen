import type { Branded } from "./index";
import { createBrandedFactory, BrandedValidator } from "./index";

export type UnEmptyString = Branded<string, "UnEmptyString">;
export const unEmptyStringFactory = createBrandedFactory(
  new BrandedValidator<string, UnEmptyString>((value) => value !== "")
);
