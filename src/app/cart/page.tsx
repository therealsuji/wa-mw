"use client";

import { useMemo } from "react";

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
import { useRelatedProducts } from "@/lib/hooks/use-products";
import { useCartStore } from "@/lib/stores/cart-store";

import { CartItemCard } from "./_components/cart-item";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  // unique categories in cart
  const cartCategories = useMemo(() => {
    const categories = items.map((item) => item.category);
    return [...new Set(categories)];
  }, [items]);

  // cart items to exclude from related products
  const cartItemIds = useMemo(() => {
    return items.map((item) => item.id);
  }, [items]);

  const { data: relatedProducts = [] } = useRelatedProducts({
    categories: cartCategories,
    excludeIds: cartItemIds,
    limit: 4,
  });

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const shipping = 5;
    const tax = +(subtotal * 0.1).toFixed(2);
    const grand = +(subtotal + shipping + tax).toFixed(2);
    return { subtotal, shipping, tax, grand };
  }, [items]);

  const handleQtyChange = (id: number, size: string | undefined, qty: number) => {
    updateQuantity(id, size, qty);
  };

  const handleRemove = (id: number, size: string | undefined) => {
    removeItem(id, size);
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
          {items.length === 0 ? (
            <div className="text-muted-foreground py-12 text-center">
              Your cart is empty. Start shopping to add items!
            </div>
          ) : (
            items.map((item) => (
              <CartItemCard
                key={`${item.id}-${item.size ?? "default"}`}
                item={item}
                onQtyChange={(id, qty) => handleQtyChange(id, item.size, qty)}
                onRemove={(id) => handleRemove(id, item.size)}
              />
            ))
          )}
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
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-semibold">You May Also Like</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((p) => (
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
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
