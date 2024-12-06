import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
    featured: z.boolean().default(false),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string(),
    tags: z.array(z.string()).default([]),
    slug: z.string(),
  }),
});

export const collections = {
  articles: articlesCollection,
};
