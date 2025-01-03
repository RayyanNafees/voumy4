import type { Post } from "@/content/config";
import { isValidUrl } from "node_modules/@astrojs/markdoc/dist/utils";

export const src= (post: Post) => isValidUrl(post.data.coverImage) ? post.data.coverImage : `/img/blogs/${post.slug}/${post.data.coverImage}`; 