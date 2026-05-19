import { defineCollection, z } from "astro:content";

const journal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    featured: z.boolean().default(false),
    image: z.string().optional()
  })
});

const mehrwerte = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    type: z.string(),
    featured: z.boolean().default(false)
  })
});

export const collections = { journal, mehrwerte };
