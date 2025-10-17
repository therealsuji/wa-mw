"use client";

import { useMemo } from "react";

import { useQuery } from "@tanstack/react-query";

import { getAllProducts, getCategories, getProduct } from "@/lib/api/products";
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

export function useProduct(id: number) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => getProduct(id),
  });
}

export function useCategories() {
  return useQuery({
    queryKey: productKeys.categories(),
    queryFn: getCategories,
  });
}

interface UseRelatedProductsParams {
  categories: string | string[];
  excludeIds?: number[];
  limit?: number;
}

export function useRelatedProducts({
  categories,
  excludeIds = [],
  limit = 4,
}: UseRelatedProductsParams) {
  const { data: allProducts, isLoading, error } = useProducts();

  const relatedProducts = useMemo(() => {
    if (!allProducts) return [];

    const categoryArray = Array.isArray(categories) ? categories : [categories];

    // Filter products by categories and exclude specified IDs
    const filtered = allProducts.filter(
      (product) =>
        categoryArray.includes(product.category) &&
        !excludeIds.includes(product.id),
    );

    // Return limited results
    return filtered.slice(0, limit);
  }, [allProducts, categories, excludeIds, limit]);

  return {
    data: relatedProducts,
    isLoading,
    error,
  };
}

