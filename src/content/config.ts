// @ts-ignore
import { defineCollection, z, type CollectionEntry } from "astro:content";

const posts = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		dateOfPublishing: z.date(),
		coverImage: z.string(),
		category: z.string(),
		author: z.string(),
		tags: z.union([z.array(z.string()), z.string()]), // or array of stringsz.string(),
		excerpt: z.string().optional(),
	}),
});

const accounts = defineCollection({
	type: "data",
	schema: z.object({
		instagram: z.string(),
		pinterest: z.string(),
		facebook: z.string(),
		twitter: z.string(),
		youtube: z.string(),
	}),
});

export const collections = { posts, accounts };
export type Post = CollectionEntry<"posts">;
