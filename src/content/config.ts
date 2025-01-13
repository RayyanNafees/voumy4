import { defineCollection, z, type CollectionEntry } from "astro:content";
import { stringTagsToArray } from "@/utils/transforms";

const posts = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		dateOfPublishing: z.date(),
		coverImage: z.object({
			src: z.string(),
			alt: z.string().optional(),
			height: z.number().optional(),
			width: z.number().optional(),
		}),
		category: z.string(),
		author: z.string(),
		tags: z.string().transform(stringTagsToArray), // or array of strings,
		excerpt: z.string(),
		popular: z.boolean(),
		featured: z.boolean(),
	}),
});

export const collections = { posts };
export type Post = CollectionEntry<"posts">;
