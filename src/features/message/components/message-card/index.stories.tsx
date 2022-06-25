import type { MessageCardProps } from ".";
import { defineStoryMeta, defineStoryObj } from "~/utils/define-story";
import { MessageCard } from ".";

export default defineStoryMeta<MessageCardProps>({
  component: MessageCard,
  args: {
    kind: "error",
  },
  argTypes: {
    kind: {
      options: ["error"],
      control: { type: "inline-radio" },
      defaultValue: "error",
    },
    children: {
      control: "text",
      defaultValue:
        "あら、サーバーがうまく勃たないみたい・・・もう一度おねが〜い♥",
    },
  },
});

export const Default = defineStoryObj<MessageCardProps>({
  args: {
    kind: "error",
  },
  render: (args) => {
    return <MessageCard {...args} />;
  },
});
