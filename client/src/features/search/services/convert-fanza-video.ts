import type { FanzaVideo } from ".";
import type { QueryBetaResponse } from "~/api/@types";

export const convertFanzaVideo = (res: QueryBetaResponse): FanzaVideo => ({
  detailUrl: res.base_url,
  description: res.describe,
  title: res.title,
  imageUrl: res.image,
  tags: res.tags,
});
