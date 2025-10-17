"use client";

import { Categories } from "@/app/_components/categories";
import { FlashSale } from "@/app/_components/flash-sale";
import { Hero } from "@/app/_components/hero";
import { LatestProducts } from "@/app/_components/latest-products";
import { MostPopular } from "@/app/_components/most-popular";
import { Newsletter } from "@/app/_components/newsletter";
import { Sale } from "@/app/_components/sale";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FlashSale />
      <MostPopular />
      <Sale />
      <LatestProducts />
      <Newsletter />
    </>
  );
}
