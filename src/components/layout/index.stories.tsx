import type { LayoutProps } from ".";
import { defineStoryMeta, defineStoryObj } from "~/utils/define-story";
import { Layout } from ".";

export default defineStoryMeta({
  component: Layout,
});

export const Default = defineStoryObj<LayoutProps>({
  render: () => {
    return <Layout />;
  },
});
