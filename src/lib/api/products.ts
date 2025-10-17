import { productSchema, productsArraySchema, type Product, type ProductDetails } from "./schemas";
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

export async function getProduct(id: number): Promise<ProductDetails> {
  const data = await get<unknown>(`/products/${id}`);
  
  const validated = productSchema.parse(data);
  
  // Add images array by duplicating the single image 5 times with unique URLs
  const productWithImages: ProductDetails = {
    ...validated,
    images: Array.from({ length: 5 }, (_, idx) => `${validated.image}#${idx}`),
  };
  
  return productWithImages;
}

export async function getCategories(): Promise<string[]> {
  const data = await get<string[]>("/products/categories");
  return data;
}

