"use client";

import { ProductCard } from "@/components/product-card";

const flashSaleProducts = [
  {
    id: 1,
    title: "Men's Cotton Jacket",
    price: 95.0,
    rating: 4.5,
    description:
      "A timeless layering essential made from durable yet lightweight cotton. This...",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    featured: true,
  },
  {
    id: 2,
    title: "Sleeveless Blouse",
    price: 40.0,
    rating: 3.0,
    description:
      "A lightweight, breathable blouse designed for effortless style on warm days. Crafted...",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    featured: false,
  },
  {
    id: 3,
    title: "Classic Cotton Shorts",
    price: 95.0,
    rating: 4.5,
    description:
      "Lightweight cotton shorts with a tailored fit, perfect for casual days",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    featured: false,
  },
  {
    id: 4,
    title: "Women's Jean Jacket",
    price: 65.0,
    rating: 4.5,
    description: "Classic denim with a cropped cut for a modern twist.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    featured: false,
  },
];

export const FlashSale = () => {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-3xl font-bold text-black">Flash Sale</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flashSaleProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              description={product.description}
              imageUrl={product.imageUrl}
              featured={product.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

