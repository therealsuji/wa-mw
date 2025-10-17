"use client";

import Link from "next/link";

import { ProductCard } from "@/components/molecules/product-card";
import { SkeletonProductCard } from "@/components/molecules/skeleton-product-card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/lib/assets";
import { useProducts } from "@/lib/hooks/use-products";

export const LatestProducts = () => {
  const { data: products, isLoading, error } = useProducts({
    limit: 8,
    sort: "desc",
  });

  if (isLoading) {
    return (
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-black">Latest Products</h2>
            <Button variant="ghost" asChild>
              <Link href="/products" className="flex items-center gap-2">
                Browse All Products
                <Icons.arrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonProductCard key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-black">Latest Products</h2>
            <Button variant="ghost" asChild>
              <Link href="/products" className="flex items-center gap-2">
                Browse All Products
                <Icons.arrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="text-center text-red-600">
            Failed to load latest products. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-black">Latest Products</h2>
          <Button variant="ghost" asChild>
            <Link href="/products" className="flex items-center gap-2">
              Browse All Products
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating.rate}
              description={product.description}
              imageUrl={product.image}
              featured={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
