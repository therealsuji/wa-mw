"use client";

import { ProductCard } from "@/components/product-card";

const popularProducts = [
  {
    id: 1,
    title: "Strap Top Blouse",
    price: 40.0,
    rating: 4.5,
    description:
      "Soft satin straps with a relaxed fit, ideal for layering or wearing solo.",
      imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      featured: false,
  },
  {
    id: 2,
    title: "Women's Cargo Pant",
    price: 59.0,
    rating: 4.5,
    description:
      "Utility-inspired with multiple pockets and a relaxed straight fit.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    featured: false,
  },
  {
    id: 3,
    title: "Urban Slim-Fit Shirt",
    price: 65.0,
    rating: 4.5,
    description:
      "Crisp, breathable cotton crafted into a modern slim-fit silhouette for a sharp...",
      imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      featured: false,
  },
  {
    id: 4,
    title: "Oversized Hoodie",
    price: 59.0,
    rating: 4.5,
    description:
      "Premium fleece hoodie with a relaxed, comfort and cozy fit.",
      imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      featured: false,
  },
];

export const MostPopular = () => {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-3xl font-bold text-black">Most Popular</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularProducts.map((product) => (
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

