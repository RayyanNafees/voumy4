import { config, fields, collection, singleton } from "@keystatic/core";
import React from "react";

export default config({
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: "rayyan/voumy4",
  },
  ui: {
    brand: {
      name: "Voumy",
      mark: ({ colorScheme }) => {
        const path =
          colorScheme === "dark" ? "/voumy-gold.png" : "/favicon.png";

        return React.createElement("img", {
          src: path,
          height: 30,
          width: 30,
          style: {
            borderRadius: 10,
          },
        });
      },
    },
    navigation: {
      Content: ["posts", "categories"],
      Settings: ["socials"],
    },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        excerpt: fields.text({ 
          label: "Short Description",
          multiline: true,
          validation: {
            length: {
              min: 20,
              max: 250
            }
          }
        }),
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
        coverImage: fields.cloudImage({
          label: "Cover Image",
          // directory: "public/img/blogs",
          validation: {
            isRequired: true,
          },
          // publicPath: "/img/blogs",
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
        popular: fields.checkbox({
          label: "Popular Post",
          description: "Mark this post as popular for featured sections",
          defaultValue: false,
        }),
        featured: fields.checkbox({
          label: "Featured Post",
          description: "Highlight this post in featured sections",
          defaultValue: false,
        }),
      },
    }),
    categories: collection({
      label: "Categories",
      slugField: "title",
      path: "src/content/categories/*",
      schema: {
        title: fields.slug({ name: { label: "Category Name" } }),
        description: fields.text({ 
          label: "Description",
          multiline: true,
          validation: {
            length: {
              min: 20,
              max: 250
            }
          }
        }),
        coverImage: fields.image({
          label: "Category Cover Image",
          directory: "public/img/categories",
          publicPath: "/img/categories",
          validation: {
            isRequired: false,
          }
        }),
      },
    }),
  },
  singletons: {
    socials: singleton({
      label: "Social Links",
      path: "src/components/accounts/accounts",
      format: { data: "json" },
      schema: {
        instagram: fields.url({
          label: "Instagram",
          description: "https://instagram.com/voumy5",
          defaultValue: "https://instagram.com/voumy5",
        }),
        pinterest: fields.url({
          label: "Pinterest",
          defaultValue: "https://pinterest.com/voumy7",
          description: "https://pinterest.com/voumy7",
        }),
        facebook: fields.url({
          label: "Facebook",
          description: "https://facebook.com/61571416023706",
          defaultValue: "https://facebook.com/61571416023706",
        }),
        twitter: fields.url({
          label: "Twitter",
          defaultValue: "https://twitter.com/voumyblogs",
          description: "https://twitter.com/voumyblogs",
        }),
        youtube: fields.url({
          label: "Youtube",
          description: "https://youtube.com/@voumy",
          defaultValue: "https://youtube.com/@voumy",
        }),
        gmail: fields.url({
          label: "Gmail",
          defaultValue: "mailto:voumyblog@gmail.com",
          description: "mailto:voumyblog@gmail.com",
        }),
      },
    }),
  },
});