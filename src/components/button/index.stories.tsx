import type { ButtonProps } from ".";
import { defineStoryMeta, defineStoryObj } from "~/utils/define-story";
import { Button } from ".";

export default defineStoryMeta<ButtonProps>({
  component: Button,
});

export const Default = defineStoryObj<ButtonProps>({
  args: {
    children: "ボタンテキスト",
  },
  argTypes: {
    theme: {
      options: ["white"],
      control: { type: "inline-radio" },
      defaultValue: "white",
    },
    onClick: { action: true },
  },
  render: (args) => <Button {...args} />,
});
