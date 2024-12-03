import { z, defineCollection } from "astro:content";

const nominationsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    type: z.string(),
    year: z.number(),
  }),
});

export const collections = {
  nominations: nominationsCollection,
};
