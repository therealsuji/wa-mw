"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";

import { Icons } from "@/lib/assets";
import { useCartStore } from "@/lib/stores/cart-store";

const CartButton = () => {
  const itemCount = useCartStore((state) => state.getItemCount());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Link
      href="/cart"
      className="text-primary hover:text-muted-foreground flex items-center gap-2"
    >
      <Icons.cart />
      {isMounted && itemCount > 0 && <span>{itemCount}</span>}
    </Link>
  );
};

export default CartButton;
