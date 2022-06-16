import type { SearchResultProps } from ".";
import type { FanzaVideo } from "~/features/search/services";
import { defineStoryMeta, defineStoryObj } from "~/utils/define-story";
import { SearchResult } from ".";

type ArgTypes = FanzaVideo;

export default defineStoryMeta<SearchResultProps, ArgTypes>({
  component: SearchResult,
  argTypes: {
    fanzaVideo: {
      disable: true,
    },
    detailUrl: {
      control: "text",
      defaultValue: "https://example.com/movies/1",
    },
    description: {
      control: "text",
      defaultValue:
        "逸材発掘！前回、おじさんたちを魅了したあの部活少女なっちゃんと再会しました。会ってすぐ分かる性格いい感じ、嬉しい。今回は、部活で鍛えたその敏感ボディを生かすために、なっちゃんを2日間連れまわしていっぱい（死ぬほど）イかせてあげました。ウブなのに！ところかまわず！おしっこ・潮・本気汁まき散らし！潮でカメラ破壊！？前回の撮影で精子大好きになってごっくんおねだり7発！気持ち良すぎて人前でも我慢できない！普通の女の子のSEXが一番エロかった！痙攣！アクメ！このイキっぷり！脳みそ、バズるぞ！※注意、たぶんなっちゃんの体積分より出てます。その辺で見かける部活女子校生もおしっこまき散らかすほど敏感かも…",
    },
    imageUrl: {
      control: "text",
      defaultValue:
        "https://pics.dmm.co.jp/digital/video/1piyo00141/1piyo00141pl.jpg",
    },
    tags: {
      control: { type: "object" },
      defaultValue: ["タグA", "タグB"],
    },
    videoUrl: {
      control: { type: "text" },
      defaultValue:
        "https://cc3001.dmm.co.jp/litevideo/freepv/c/caw/cawd00186/cawd00186_mhb_w.mp4",
    },
  },
});

export const Default = defineStoryObj<SearchResultProps, ArgTypes>({
  argTypes: {
    title: {
      control: "text",
      defaultValue: "タイトル",
    },
  },
  render: ({ title, detailUrl, description, imageUrl, tags, videoUrl }) => {
    return (
      <SearchResult
        fanzaVideo={{
          title,
          detailUrl,
          description,
          imageUrl,
          tags,
          videoUrl,
        }}
      />
    );
  },
});
