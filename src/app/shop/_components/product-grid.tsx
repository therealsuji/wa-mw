"use client";

import { ProductCard } from "@/components/molecules/product-card";

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  imageUrl: string;
  category: string[];
}

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

