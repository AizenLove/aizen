import { createPortal } from "react-dom";
import { layoutId } from ".";

type PortalProps = React.PropsWithChildren<Record<string, unknown>>;

export const Portal: React.VFC<PortalProps> = ({ children }: PortalProps) => {
  const element = document.getElementById(layoutId);

  return element !== null ? createPortal(children, element) : null;
};
