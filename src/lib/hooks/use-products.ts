"use client";

import { useQuery } from "@tanstack/react-query";

import { getAllProducts } from "@/lib/api/products";
import { productKeys } from "@/lib/api/query-keys";

interface UseProductsParams {
  limit?: number;
  sort?: "asc" | "desc";
}

export function useProducts(params?: UseProductsParams) {
  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: () => getAllProducts(params),
  });
}

