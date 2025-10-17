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
      className="text-primary flex items-center gap-2 group"
    >
      <Icons.cart className="text-primary group-hover:text-muted-foreground"/>
      {isMounted && itemCount > 0 && <span className="group-hover:text-muted-foreground">{itemCount}</span>}
    </Link>
  );
};

export default CartButton;
