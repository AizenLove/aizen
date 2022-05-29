import { range } from "rambda";
import { useMemo } from "react";
import type { StoryObj } from "@storybook/react";
import { getRandomAttractText } from "~/services/attract-text";
import styles from "./attract-text-background.module.scss";

export type AttractTextBackgroundProps = Record<string, never>;

export const AttractTextBackground: React.VFC<
  AttractTextBackgroundProps
> = () => {
  const attractTexts = useMemo(() => {
    return range(1, 30).map((i) => ({
      index: i,
      text: getRandomAttractText(),
    }));
  }, []);

  return (
    <ul className={styles.list}>
      {attractTexts.map(({ index, text }) => (
        <li className={styles.listItem} key={index}>
          {text}
        </li>
      ))}
    </ul>
  );
};

export default { component: AttractTextBackground };
export const Default: StoryObj<AttractTextBackgroundProps> = {
  args: {},
  render: (args) => <AttractTextBackground {...args} />,
};
