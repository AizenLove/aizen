import { AttractTextBackground, AttractTextBackgroundProps } from ".";
import { StoryObj } from '@storybook/react'

export default { component: AttractTextBackground };
export const Default: StoryObj<AttractTextBackgroundProps> = {
  args: {},
  render: (args) => <AttractTextBackground {...args} />
};
