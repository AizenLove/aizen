import type { SearchResultProps } from ".";
import type { Merge } from "type-fest";
import { defineStoryMeta, defineStoryObj } from "~/utils/define-story";
import { loaded, loading } from "~/utils/loadable-state";
import { SearchResult } from ".";

export default defineStoryMeta({
  component: SearchResult,
});

type Args = Merge<
  SearchResultProps,
  {
    data: "loading" | "loaded";
  }
>;

export const Default = defineStoryObj<Args>({
  argTypes: {
    data: {
      options: ["loading", "loaded"],
      control: {
        type: "inline-radio",
      },
      defaultValue: "loaded",
    },
  },
  render: ({ data }) => {
    return (
      <SearchResult
        data={
          data === "loading"
            ? loading()
            : loaded({
                base_url: "https://example.com",
                describe: "説明文です。説明文です。説明文です。",
                id: "id",
                image: "htpps://example.com/image.png",
                tags: ["タグ1", "タグ2", "タグ3"],
                title: "タイトル",
              })
        }
      />
    );
  },
});
