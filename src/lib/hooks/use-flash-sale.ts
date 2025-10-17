"use client";

import { useQuery } from "@tanstack/react-query";

import { getAllProducts } from "@/lib/api/products";
import { productKeys } from "@/lib/api/query-keys";
import { type Product } from "@/lib/api/schemas";

export function useFlashSaleProducts() {
  return useQuery({
    queryKey: productKeys.list(),
    queryFn: () => getAllProducts(),
    select: (products: Product[]) => {
      const mens = products.filter((p) => p.category === "men's clothing");
      const womens = products.filter((p) => p.category === "women's clothing");
      const result: Product[] = [];

      for (let i = 0; i < Math.min(mens.length, womens.length); i++) {
        result.push(mens[i]!);
        result.push(womens[i]!);
        if (result.length >= 4) break;
      }

      return result.slice(0, 4);
    },
  });
}

