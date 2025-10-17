"use client";

import { ProductCard } from "@/components/molecules/product-card";
import { SkeletonProductCard } from "@/components/molecules/skeleton-product-card";
import { useFlashSaleProducts } from "@/lib/hooks/use-flash-sale";

export const FlashSale = () => {
  const { data: products, isLoading, error } = useFlashSaleProducts();

  if (isLoading) {
    return (
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-bold text-black">Flash Sale</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
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
          <h2 className="mb-12 text-3xl font-bold text-black">Flash Sale</h2>
          <div className="text-center text-red-600">
            Failed to load flash sale products. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-3xl font-bold text-black">Flash Sale</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products?.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating.rate}
              description={product.description}
              imageUrl={product.image}
              category={product.category}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

