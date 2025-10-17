"use client";

import { useMemo, useState } from "react";

import Link from "next/link";

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
import { Separator } from "@/components/ui/separator";

import { type CartItem, CartItemCard } from "./_components/cart-item";

const initialCart: CartItem[] = [
  {
    id: 1,
    title: "Men's Cotton Jacket",
    price: 95,
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    size: "Medium",
    qty: 1,
  },
  {
    id: 2,
    title: "Urban Slim‑Fit Shirt",
    price: 65,
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    size: "Small",
    qty: 1,
  },
  {
    id: 3,
    title: "Classic Cotton Shorts",
    price: 95,
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    size: "Medium",
    qty: 1,
  },
];

const related = [
  {
    id: 4,
    title: "Men's Cotton Jacket",
    price: 95,
    rating: 4.5,
    description:
      "A timeless layering essential made from durable yet lightweight cotton.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },
  {
    id: 5,
    title: "Sleeveless Blouse",
    price: 40,
    rating: 3.0,
    description:
      "A lightweight, breathable blouse designed for effortless style.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },
  {
    id: 6,
    title: "Classic Cotton Shorts",
    price: 95,
    rating: 4.5,
    description: "Lightweight cotton shorts with a tailored fit.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },
  {
    id: 7,
    title: "Women's Jean Jacket",
    price: 65,
    rating: 4.5,
    description: "Classic denim with a cropped cut for a modern twist.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialCart);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const shipping = 5;
    const tax = +(subtotal * 0.1).toFixed(2);
    const grand = +(subtotal + shipping + tax).toFixed(2);
    return { subtotal, shipping, tax, grand };
  }, [items]);

  const updateQty = (id: number, qty: number) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

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
            <BreadcrumbPage>Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
        {/* Items */}
        <div className="space-y-4">
          {items.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              onQtyChange={updateQty}
              onRemove={removeItem}
            />
          ))}
        </div>

        {/* Summary */}
        <Card className="bg-base-muted h-fit p-0 shadow-none gap-0">
          <div className="text-primary p-4 font-semibold">Order summary</div>
          <div className="space-y-3 p-4 text-sm">
            <div className="text-muted-foreground flex items-center justify-between">
              <span>Subtotal</span>
              <span>${totals.subtotal.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="text-muted-foreground flex items-center justify-between">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <Separator />
            <div className="text-muted-foreground flex items-center justify-between">
              <span>Tax (10%)</span>
              <span>${totals.tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="text-primary flex items-center justify-between pt-3 font-semibold">
              <span>Grand Total</span>
              <span>${totals.grand.toFixed(2)}</span>
            </div>
            <Button className="mt-2 w-full">Go to Checkout</Button>
          </div>
        </Card>
      </div>

      {/* Recommendations */}
      <section className="mt-16">
        <h2 className="mb-6 text-xl font-semibold">You May Also Like</h2>
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
