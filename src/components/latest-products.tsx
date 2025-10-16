"use client";

import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/lib/assets";

const latestProducts = [
  {
    id: 1,
    title: "Men's Cotton Jacket",
    price: 95.0,
    rating: 4.5,
    description:
      "A timeless layering essential made from durable yet lightweight cotton. This...",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    featured: false,
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
  {
    id: 5,
    title: "Strap Top Blouse",
    price: 40.0,
    rating: 4.5,
    description:
      "Soft satin straps with a relaxed fit, ideal for layering or wearing solo.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    featured: false,
  },
  {
    id: 6,
    title: "Women's Cargo Pant",
    price: 59.0,
    rating: 4.5,
    description:
      "Utility-inspired with multiple pockets and a relaxed straight fit.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    featured: false,
  },
  {
    id: 7,
    title: "Urban Slim-Fit Shirt",
    price: 65.0,
    rating: 4.5,
    description:
      "Crisp, breathable cotton crafted into a modern slim-fit silhouette for a sharp...",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    featured: false,
  },
  {
    id: 8,
    title: "Oversized Hoodie",
    price: 59.0,
    rating: 4.5,
    description: "Premium fleece hoodie with a relaxed, comfort and cozy fit.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    featured: false,
  },
];

export const LatestProducts = () => {
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
          {latestProducts.map((product) => (
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
