import type { LoadingProps } from ".";
import { defineStoryMeta, defineStoryObj } from "~/utils/define-story";
import { Loading } from ".";

export default defineStoryMeta({
  component: Loading,
});

export const Default = defineStoryObj<LoadingProps>({
  render: () => {
    return <Loading />;
  },
});
