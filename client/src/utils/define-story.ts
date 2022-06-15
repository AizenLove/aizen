import type { Meta, StoryObj } from "@storybook/react";

export const defineStoryMeta = <T>(options: Meta<T>): Meta<T> => options;
export const defineStoryObj = <T extends Record<string, unknown>>(
  options: StoryObj<T>
): StoryObj<T> => options;
