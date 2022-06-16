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
                base_url: "https://example.com/movies/1",
                affiliateURL: "https://example.com/movies/1",
                affiliateURLsp: "https://example.com/movies/1",
                date: "",
                describe:
                  "逸材発掘！前回、おじさんたちを魅了したあの部活少女なっちゃんと再会しました。会ってすぐ分かる性格いい感じ、嬉しい。今回は、部活で鍛えたその敏感ボディを生かすために、なっちゃんを2日間連れまわしていっぱい（死ぬほど）イかせてあげました。ウブなのに！ところかまわず！おしっこ・潮・本気汁まき散らし！潮でカメラ破壊！？前回の撮影で精子大好きになってごっくんおねだり7発！気持ち良すぎて人前でも我慢できない！普通の女の子のSEXが一番エロかった！痙攣！アクメ！このイキっぷり！脳みそ、バズるぞ！※注意、たぶんなっちゃんの体積分より出てます。その辺で見かける部活女子校生もおしっこまき散らかすほど敏感かも…",
                id: "id",
                image:
                  "https://pics.dmm.co.jp/digital/video/1piyo00141/1piyo00141pl.jpg",
                tags: [],
                title: "タイトル",
              })
        }
      />
    );
  },
});
