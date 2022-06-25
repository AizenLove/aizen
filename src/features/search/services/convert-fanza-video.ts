import type { FanzaVideo } from ".";
import type { QueryBetaResponse } from "~/api/@types";

export const convertFanzaVideo = (res: QueryBetaResponse): FanzaVideo => ({
  detailUrl: res.affiliateURLsp ?? res.base_url, // 画面幅みて出し分けたいけど一旦これで
  description: res.describe,
  title: res.title,
  imageUrl: res.image,
  tags: res.tags,
  videoUrl: res.sampleMovieURL?.size_476_306,
});
