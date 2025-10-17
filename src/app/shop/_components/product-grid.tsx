"use client";

import { ProductCard } from "@/components/molecules/product-card";
import { type Product } from "@/lib/api/schemas";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating.rate}
            description={product.description}
            imageUrl={product.image}
          />
        ))}
    </div>
  );
};

