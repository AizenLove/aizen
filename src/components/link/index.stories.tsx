import type { LinkProps } from ".";
import { defineStoryMeta, defineStoryObj } from "~/utils/define-story";
import { Link } from ".";

export default defineStoryMeta<LinkProps>({
  component: Link,
});
export const Default = defineStoryObj<LinkProps>({
  args: {
    to: "リンクテキスト",
    children: "Link Text",
  },
  render: (args) => <Link {...args} />,
});
