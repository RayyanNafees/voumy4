// @ts-ignore
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		dateOfPublishing: z.date(),
		coverImage: z.string(),
		category: z.string(),
		author: z.string(),
		tags: z.union([z.array(z.string()), z.string()]), // or array of stringsz.string(),
	}),
});

export const collections = { posts };
