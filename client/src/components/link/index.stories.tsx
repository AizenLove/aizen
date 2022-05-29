import { Link as LinkReactLocation } from "@tanstack/react-location";
import type { StoryObj } from "@storybook/react";
import type { PropsWithChildren } from "react";

export type LinkProps = PropsWithChildren<{
  to: string;
}>;

export const Link: React.VFC<LinkProps> = ({ to, children }) => {
  return <LinkReactLocation to={to}>{children}</LinkReactLocation>;
};

export default { component: Link };
export const Default: StoryObj<LinkProps> = {
  args: {},
  render: (args) => <Link {...args} />,
};
