import type { HomePageContentProps } from ".";
import { defineStoryMeta, defineStoryObj } from "~/utils/define-story";
import { HomePageContent } from ".";

export default defineStoryMeta({
  component: HomePageContent,
});

export const Default = defineStoryObj<HomePageContentProps>({
  render: () => {
    return <HomePageContent />;
  },
});
