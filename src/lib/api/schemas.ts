import { z } from "zod";

export const ratingSchema = z.object({
  rate: z.number(),
  count: z.number(),
});

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string(),
  rating: ratingSchema,
});

export const productsArraySchema = z.array(productSchema);

export type Product = z.infer<typeof productSchema>;
export type Rating = z.infer<typeof ratingSchema>;
