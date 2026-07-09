import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { glob } from "astro/loaders";

const authors = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    job: z.string(),
    description: z.string(),
    avatar: z.string(),
    linkedin: z.string().optional(),
  }),
});

const solutions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/solutions" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.union([z.string(), z.array(z.string())]),
    icon: z.string(),
    summary: z.string().optional(),
    details: z.array(
      z.object({
        question: z.string(),
        answer: z.union([z.string(), z.array(z.object({
          name: z.string(),
          description: z.string(),
        }))]),
      })
    ).optional(),
    layout: z.string().optional(),
    permalink: z.string().optional(),
  }),
});

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
  authors,
  solutions,
  posts,
};
