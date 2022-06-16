import type { SearchResultPageContentProps } from ".";
import { unEmptyStringFactory } from "~/types/branded/un-empty-string";
import { defineStoryMeta, defineStoryObj } from "~/utils/define-story";
import { loading, loaded } from "~/utils/loadable-state";
import { SearchResultPageContent } from ".";

export default defineStoryMeta({
  component: SearchResultPageContent,
});

type ArgTypes = {
  searchedData: "loading" | "loaded";
  title: string;
};

export const Default = defineStoryObj<SearchResultPageContentProps, ArgTypes>({
  args: {
    isAlive: true,
    searchText: unEmptyStringFactory.build("検索ワード"),
    title: "タイトル",
  },
  argTypes: {
    searchText: {
      name: "検索ワード",
      control: { type: "text" },
    },
    searchedData: {
      options: ["loading", "loaded"],
      control: {
        type: "inline-radio",
      },
      defaultValue: "loading",
    },
    title: {
      control: { type: "text" },
    },
  },
  render: ({ searchText, searchedData, isAlive }) => {
    return (
      <SearchResultPageContent
        isAlive={isAlive}
        searchText={searchText}
        searchedData={
          searchedData === "loading"
            ? loading()
            : loaded({
                base_url: "https://example.com/hoge",
                describe: "説明文",
                id: "id",
                image: "image",
                tags: [],
                title: "タイトル",
              })
        }
      />
    );
  },
});
