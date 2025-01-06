// @ts-ignore
import { defineCollection, z, type CollectionEntry } from "astro:content";

const posts = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		dateOfPublishing: z.date(),
		coverImage: z.object({
			src: z.string(),
			alt: z.string(),
			height: z.number(),
			width: z.number(),
		}),
		category: z.string(),
		author: z.string(),
		tags: z.string().transform((s) => [
			...new Set(
				s
					.split(" ")
					.filter((i) => i.trim())
					.map((i) => i.toLowerCase()),
			).keys(),
		]), // or array of strings,
		excerpt: z.string(),
		popular: z.boolean(),
		featured: z.boolean(),
	}),
});

export const collections = { posts };
export type Post = CollectionEntry<"posts">;
