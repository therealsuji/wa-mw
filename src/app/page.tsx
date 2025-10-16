"use client";

import { Categories } from "@/components/categories";
import { FlashSale } from "@/components/flash-sale";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LatestProducts } from "@/components/latest-products";
import { MostPopular } from "@/components/most-popular";
import { Newsletter } from "@/components/newsletter";
import { Sale } from "@/components/sale";

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
