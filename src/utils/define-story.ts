import type { Meta, StoryObj } from "@storybook/react";
import type { Merge } from "type-fest";

export const defineStoryMeta = <
  Args extends Record<string, unknown>,
  // eslint-disable-next-line @typescript-eslint/ban-types -- パズル用なので...
  ArgTypes extends Record<string, unknown> = {}
>(
  options: Meta<Merge<Args, ArgTypes>>
): Meta<Merge<Args, ArgTypes>> => options;
export const defineStoryObj = <
  Args extends Record<string, unknown>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  ArgTypes extends Record<string, unknown> = {}
>(
  options: StoryObj<Merge<Args, ArgTypes>>
): StoryObj<Merge<Args, ArgTypes>> => options;
