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
							directory: "public/img/blogs",
							publicPath: "/img/blogs",
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
						{ label: "Reality", value: "reality" },
						{ label: "Journal", value: "journal" },
						{ label: "Lifestyle", value: "lifestyle" },
						{ label: "Travel", value: "travel" },
					],
					defaultValue: "reality",
				}),
				author: fields.select({
					label: "Author",
					options: [
						{ label: "Voumy", value: "voumy" },
						{ label: "Yasir", value: "yasir" },
						{ label: "Rayyan", value: "rayyan" },
					],
					defaultValue: "voumy",
				}),
				tags: fields.text({
					label: "Tags",
					validation: {
						isRequired: true,
					},
					description: "Space separated tags, eg: travel food lifestyle",
				}),
			},
		}),
	},
});
