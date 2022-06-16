import { Link as LinkReactLocation } from "@tanstack/react-location";
import type { PropsWithChildren } from "react";

export type LinkProps = PropsWithChildren<{
  to: string;
}>;

export const Link: React.VFC<LinkProps> = ({ to, children }) => {
  return <LinkReactLocation to={to}>{children}</LinkReactLocation>;
};
