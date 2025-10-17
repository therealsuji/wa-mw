import { productsArraySchema, type Product } from "./schemas";
import { get } from "./client";

interface GetAllProductsParams {
  limit?: number;
  sort?: "asc" | "desc";
}

export async function getAllProducts(
  params?: GetAllProductsParams
): Promise<Product[]> {
  const searchParams = new URLSearchParams();

  if (params?.limit) {
    searchParams.set("limit", params.limit.toString());
  }

  if (params?.sort) {
    searchParams.set("sort", params.sort);
  }

  const query = searchParams.toString();
  const endpoint = `/products${query ? `?${query}` : ""}`;

  const data = await get<unknown>(endpoint);

  // Validate response with Zod
  const validated = productsArraySchema.parse(data);

  return validated;
}

export async function getCategories(): Promise<string[]> {
  const data = await get<string[]>("/products/categories");
  return data;
}

