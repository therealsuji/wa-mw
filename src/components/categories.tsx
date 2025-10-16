"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icons, Images } from "@/lib/assets";

export const Categories = () => {
  return (
    <section className="bg-background py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-primary text-3xl font-bold">Shop By Category</h2>
          <Button variant="ghost" asChild>
            <Link href="/categories" className="flex items-center gap-2">
              Browse All Categories
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <Link
            href="/new-arrivals"
            className="relative block h-[34rem] overflow-hidden rounded-lg lg:col-span-2"
          >
            <Images.newArrivals className="object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="text-background absolute bottom-6 left-6">
              <h3 className="mb-2 text-2xl font-bold">New Arrivals</h3>
              <span className="flex items-center gap-2">
                Shop Now
                <Icons.arrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
          <div className="grid grid-cols-1 gap-6 lg:col-span-2">
            <Link
              href="/womens"
              className="relative block h-[16rem] overflow-hidden rounded-lg"
            >
              <Images.womensCategory className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="text-background absolute bottom-6 left-6">
                <h3 className="mb-2 text-2xl font-bold">
                  Women&apos;s Clothing
                </h3>

                <span className="flex items-center gap-2">
                  Shop Now
                  <Icons.arrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
            <Link
              href="/mens"
              className="relative block h-[16rem] overflow-hidden rounded-lg"
            >
              <Images.mensCategory className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="text-background absolute bottom-6 left-6">
                <h3 className="mb-2 text-2xl font-bold">Men&apos;s Clothing</h3>
                <span className="flex items-center gap-2">
                  Shop Now
                  <Icons.arrowRight className="text-background h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
