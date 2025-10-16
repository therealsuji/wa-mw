import React from "react";

import Image from "next/image";

import { Facebook, Instagram, Plus, Search, Twitter } from "lucide-react";

import IconApplePay from "@/components/icons/icon-apple-pay";
import IconArrowRight from "@/components/icons/icon-arrow-right";
import IconCart from "@/components/icons/icon-cart";
import IconGlint from "@/components/icons/icon-glint";
import IconGooglePay from "@/components/icons/icon-google-pay";
import IconMaster from "@/components/icons/icon-master";
import IconStar from "@/components/icons/icon-star";
import IconUser from "@/components/icons/icon-user";
import IconVisa from "@/components/icons/icon-visa";

export const Images = {
  heroBg: ({ className }: { className?: string }) => (
    <Image
      src="/images/hero-bg.png"
      alt="Modern fashion models showcasing timeless style"
      fill
      className={className}
    />
  ),
  newArrivals: ({ className }: { className?: string }) => (
    <Image
      src="/images/new-arrivals.png"
      alt="New arrivals collection"
      fill
      className={className}
    />
  ),
  womensCategory: ({ className }: { className?: string }) => (
    <Image
      src="/images/womens-category.png"
      alt="Women's fashion category"
      fill
      className={className}
    />
  ),
  mensCategory: ({ className }: { className?: string }) => (
    <Image
      src="/images/mens-category.png"
      alt="Men's fashion category"
      fill
      className={className}
    />
  ),
  autumnSale: ({ className }: { className?: string }) => (
    <Image
      src="/images/autumn-sale.png"
      alt="Autumn sale"
      fill
      className={className}
    />
  ),
} as const;

export const Icons = {
  visa: ({ className }: { className?: string }) => (
    <IconVisa className={className} />
  ),
  mastercard: ({ className }: { className?: string }) => (
    <IconMaster className={className} />
  ),
  applePay: ({ className }: { className?: string }) => (
    <IconApplePay className={className} />
  ),
  googlePay: ({ className }: { className?: string }) => (
    <IconGooglePay className={className} />
  ),
  arrowRight: ({ className }: { className?: string }) => (
    <IconArrowRight className={className} />
  ),
  cart: ({ className }: { className?: string }) => (
    <IconCart className={className} />
  ),
  glint: ({ className }: { className?: string }) => (
    <IconGlint className={className} />
  ),
  star: ({ className }: { className?: string }) => (
    <IconStar className={className} />
  ),
  user: ({ className }: { className?: string }) => (
    <IconUser className={className} />
  ),
  facebook: ({ className }: { className?: string }) => (
    <Facebook className={className} />
  ),
  instagram: ({ className }: { className?: string }) => (
    <Instagram className={className} />
  ),
  search: ({ className }: { className?: string }) => (
    <Search className={className} />
  ),
  twitter: ({ className }: { className?: string }) => (
    <Twitter className={className} />
  ),
  plus: ({ className }: { className?: string }) => (
    <Plus className={className} />
  ),
} as const;

export type IconAsset = keyof typeof Icons;
export type ImageAsset = keyof typeof Images;
