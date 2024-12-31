import { config, fields, collection } from "@keystatic/core";

export default config({
	storage: {
		kind: "cloud",
	},
	cloud: {
		project: "rayyan/voumy4",
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "src/content/posts/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				content: fields.markdoc({
					label: "Content",
					options: {
						image: {
							directory: "src/assets/images/posts",
							publicPath: "../../assets/images/posts/",
						},
					},
				}),
				dateOfPublishing: fields.date({
					label: "Date of publishing",
					defaultValue: {
						kind: "today",
					},
				}),
				coverImage: fields.image({
					label: "Cover Image",
					directory: "public/img/blogs",
					validation: {
						isRequired: true,
					},
				}),
				category: fields.select({
					label: "Category",
					options: [
						{ label: "General", value: "general" },
						{ label: "Lifestyle", value: "lifestyle" },
						{ label: "Travel", value: "travel" },
						{ label: "Food", value: "food" },
					],
					defaultValue: "general",
				}),
				author: fields.select({
					label: "Author",
					options: [
						{ label: "Yasir", value: "yasir" },
						{ label: "Rayyan", value: "rayyan" },
					],
					defaultValue: "yasir",
				}),
				tags: fields.multiselect({
					label: "Tags",
					options: [
						{ label: "Travel", value: "travel" },
						{ label: "Lifestyle", value: "lifestyle" },
						{ label: "Food", value: "food" },
					],
				}),
			},
		}),
	},
});
