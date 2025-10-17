"use client";

import { use, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { toast } from "sonner";

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
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/lib/assets";
import { useProduct, useRelatedProducts } from "@/lib/hooks/use-products";
import { useCartStore } from "@/lib/stores/cart-store";

const isClothingCategory = (category?: string) => {
  return category === "men's clothing" || category === "women's clothing";
};

export default function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: product, isLoading, error } = useProduct(Number(id));
  const addItem = useCartStore((state) => state.addItem);

  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (product?.images?.[0]) {
      setSelectedImage(product.images[0]);
    }
  }, [product?.images]);
  const [size, setSize] = useState<string>("Medium");
  const [qty, setQty] = useState<number>(1);

  // Hides counter if clothing
  const isClothing = isClothingCategory(product?.category);

  const handleAddToCart = () => {
    if (!product) return;

    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.image,
      category: product.category,
      size: isClothing ? size : undefined,
      qty,
    });

    toast.success("Added to cart!", {
      description: `${qty} × ${product.title}${isClothing ? ` (${size})` : ""}`,
    });

    // Reset quantity to 1 after adding
    setQty(1);
  };

  // Get related products from the same category, excluding current product
  const { data: related = [] } = useRelatedProducts({
    categories: product?.category ?? "",
    excludeIds: product ? [product.id] : [],
    limit: 4,
  });

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 h-6 w-48 animate-pulse rounded bg-gray-200" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_1fr_1fr]">
          <div className="order-2 flex gap-4 lg:order-1 lg:flex-col">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-24 w-24 animate-pulse rounded bg-gray-200"
              />
            ))}
          </div>
          <div className="order-1 h-96 animate-pulse rounded bg-gray-200 lg:order-2" />
          <div className="order-3 space-y-6 lg:pl-4">
            <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
            <div className="h-6 w-1/4 animate-pulse rounded bg-gray-200" />
            <div className="h-20 w-full animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="text-center text-red-600">
          Product not found. Please try again later.
        </div>
      </div>
    );
  }

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
            <BreadcrumbLink href="#">{product.category}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Top content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[120px_1fr_1fr]">
        {/* Thumbnails */}
        <div className="order-2 flex gap-4 lg:order-1 lg:flex-col">
          {product.images.map((src, idx) => (
            <button
              key={idx}
              className={`relative aspect-square w-24 overflow-hidden rounded-md border ${
                selectedImage === src ? "border-primary" : "border-input"
              }`}
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={product.title}
                fill
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>

        {/* Main image */}
        <Card className="order-1 flex items-center justify-center overflow-hidden shadow-none lg:order-2">
          <div className="relative aspect-square w-full max-w-xl">
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt={product.title}
                fill
                className="object-contain p-4"
              />
            ) : (
              <Skeleton className="h-full w-full" />
            )}
          </div>
        </Card>

        {/* Details */}
        <div className="order-3 space-y-6 lg:pl-4">
          <div>
            <h1 className="text-primary text-2xl font-semibold">
              {product.title}
            </h1>
            <div className="mt-2 flex items-center gap-2">
              <Icons.star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-primary text-sm">
                {product.rating.rate}/5
              </span>
            </div>
            <div className="text-primary mt-3 text-xl font-bold">
              ${product.price.toFixed(2)}
            </div>
            <p className="text-muted-foreground mt-3 text-sm">
              {product.description} This jacket offers a clean, structured fit
              with just the right amount of stretch for all‑day comfort.
            </p>
          </div>

          {/* Size - Only show for clothing */}
          {isClothing && (
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
          )}

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-3">
            <Counter value={qty} onChange={setQty} min={1} max={99} />
            <Button className="h-10 px-6" onClick={handleAddToCart}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold text-black">Description</h2>
        <p className="text-muted-foreground max-w-3xl text-sm">
          {product.description}
        </p>
      </section>

      {/* Related products */}
      <section className="mt-12">
        <h3 className="mb-6 text-xl font-semibold text-black">
          Related Products
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.length > 0 ? (
            related.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                title={p.title}
                price={p.price}
                rating={p.rating.rate}
                description={p.description}
                imageUrl={p.image}
                category={p.category}
              />
            ))
          ) : (
            <p className="text-muted-foreground col-span-4 text-center">
              No related products found
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
