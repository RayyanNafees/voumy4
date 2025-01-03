import type { Post } from "@/content/config";
import { isValidUrl } from "node_modules/@astrojs/markdoc/dist/utils";

export const src = (post: Post) => post.data.coverImage;
