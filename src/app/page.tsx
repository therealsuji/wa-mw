"use client";

import { Categories } from "@/app/_components/categories";
import { FlashSale } from "@/app/_components/flash-sale";
import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";
import { Hero } from "@/app/_components/hero";
import { LatestProducts } from "@/app/_components/latest-products";
import { MostPopular } from "@/app/_components/most-popular";
import { Newsletter } from "@/app/_components/newsletter";
import { Sale } from "@/app/_components/sale";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <Hero />
        <Categories />
        <FlashSale />
        <MostPopular />
        <Sale />
        <LatestProducts />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
