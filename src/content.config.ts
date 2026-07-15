import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  posts,
};
