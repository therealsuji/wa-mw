"use client";

import { use, useMemo, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Counter } from "@/components/molecules/counter";
import { ProductCard } from "@/components/molecules/product-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/lib/assets";

type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  imageUrl: string;
  images: string[];
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Urban Slim-Fit Shirt",
    price: 65,
    rating: 4.5,
    description:
      "Crisp, breathable cotton crafted into a modern slim-fit silhouette for a sharp everyday look.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    images: Array.from(
      { length: 4 },
      () => "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
    ),
  },
  {
    id: 2,
    title: "Classic Cotton Shorts",
    price: 95,
    rating: 4.5,
    description:
      "Lightweight cotton shorts with a tailored fit, perfect for casual days.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    images: Array.from(
      { length: 4 },
      () => "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
    ),
  },
  {
    id: 3,
    title: "Oversized Hoodie",
    price: 59,
    rating: 4.5,
    description:
      "Premium fleece hoodie with a relaxed fit for unmatched comfort and warmth.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    images: Array.from(
      { length: 4 },
      () => "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
    ),
  },
  {
    id: 4,
    title: "Sleeveless Blouse",
    price: 40,
    rating: 3.0,
    description:
      "A lightweight, breathable blouse designed for effortless warm‑weather style.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    images: Array.from(
      { length: 4 },
      () => "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
    ),
  },
  {
    id: 5,
    title: "Women's Cargo Pant",
    price: 59,
    rating: 4.5,
    description:
      "Utility‑inspired cargo pants with multiple pockets and a relaxed straight fit.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    images: Array.from(
      { length: 4 },
      () => "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
    ),
  },
];

export default function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = useMemo(() => {
    const found = PRODUCTS.find((p) => p.id === Number(id));
    return (found ?? PRODUCTS[0])!;
  }, [id]);

  const [selectedImage, setSelectedImage] = useState<string>(
    product.images[0] ?? product.imageUrl
  );
  const [size, setSize] = useState<string>("Medium");
  const [qty, setQty] = useState<number>(1);

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/shop">Shop</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Men&apos;s Clothing</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Jacket</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Top content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_1fr_1fr]">
        {/* Thumbnails */}
        <div className="order-2 flex gap-4 lg:order-1 lg:flex-col">
          {product.images.map((src, idx) => (
            <button
              key={`${src}-${idx}`}
              className={`relative aspect-square w-24 overflow-hidden rounded-md border ${
                selectedImage === src ? "border-primary" : "border-input"
              }`}
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={product.title}
                fill
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>

        {/* Main image */}
        <Card className="order-1 flex items-center justify-center overflow-hidden shadow-none lg:order-2">
          <div className="relative aspect-square w-full max-w-xl">
            <Image
              src={selectedImage}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
        </Card>

        {/* Details */}
        <div className="order-3 space-y-6 lg:pl-4">
          <div>
            <h1 className="text-primary text-2xl font-semibold">
              {product.title}
            </h1>
            <div className="mt-2 flex items-center gap-2">
              <Icons.star className="h-4 w-4" />
              <span className="text-primary text-sm">{product.rating}/5</span>
            </div>
            <div className="text-primary mt-3 text-xl font-bold">
              ${product.price.toFixed(2)}
            </div>
            <p className="text-muted-foreground mt-3 text-sm">
              {product.description} This jacket offers a clean, structured fit
              with just the right amount of stretch for all‑day comfort.
            </p>
          </div>

          {/* Size */}
          <div>
            <p className="text-muted-foreground mb-2 text-xs">Select Size</p>
            <div className="flex gap-2">
              {(["Small", "Medium", "Large"] as const).map((s) => (
                <Button
                  key={s}
                  variant={size === s ? "default" : "outline"}
                  onClick={() => setSize(s)}
                  className="h-8 px-3"
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-3">
            <Counter value={qty} onChange={setQty} min={1} max={99} />
            <Button className="h-10 px-6">Add to cart</Button>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold text-black">Description</h2>
        <p className="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-muted-foreground text-sm">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </section>

      {/* Related products */}
      <section className="mt-12">
        <h3 className="mb-6 text-xl font-semibold text-black">
          Related Products
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              rating={p.rating}
              description={p.description}
              imageUrl={p.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
