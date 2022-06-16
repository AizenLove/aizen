import classNames from "classnames";
import type { PropsWithChildren } from "react";
import styles from "./button.module.scss";

export type ButtonThemeKind = "white";
export type ButtonProps = PropsWithChildren<{
  theme: ButtonThemeKind;
  onClick: () => void;
}>;

export const Button: React.VFC<ButtonProps> = ({
  theme,
  children,
  onClick,
}) => {
  return (
    <button
      role="button"
      onClick={onClick}
      className={classNames(styles.button, styles[`${theme}Theme`])}
    >
      {children}
    </button>
  );
};
