import type { AttractTextBackgroundProps } from ".";
import { defineStoryMeta, defineStoryObj } from "~/utils/define-story";
import { AttractTextBackground } from ".";

export default defineStoryMeta({
  component: AttractTextBackground,
});

export const Default = defineStoryObj<AttractTextBackgroundProps>({
  args: {},
  render: (args) => <AttractTextBackground {...args} />,
});
