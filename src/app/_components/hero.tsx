"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icons, Images } from "@/lib/assets";

import { Separator } from "../../components/ui/separator";

export const Hero = () => {
  return (
    <section className="bg-background relative flex h-[40.375rem] w-full items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8">
            <div className="mb-8 space-y-4">
              <div className="space-y-4">
                <h1 className="relative inline-block text-4xl font-bold tracking-tight text-black lg:text-5xl">
                  Redefining Fashion
                  <br /> with Modern Walk
                  <Icons.glint className="absolute -top-8 -right-8 ml-2 inline h-8 w-8" />
                </h1>
                <p className="text-muted-foreground text-lg">
                  Step into timeless fashion made for today&apos;s lifestyle.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary text-button-foreground hover:bg-primary/90"
              >
                <Link href="/shop">Shop Now</Link>
              </Button>
            </div>

            <div className="flex min-h-[4rem] items-stretch">
              <div className="flex flex-1 flex-col justify-center pr-8 text-left">
                <div className="text-2xl font-bold text-black">200+</div>
                <div className="text-muted-foreground text-sm">
                  International Brands
                </div>
              </div>
              <div className="flex items-center">
                <Separator orientation="vertical" />
              </div>
              <div className="flex flex-1 flex-col justify-center px-8 text-left">
                <div className="text-2xl font-bold text-black">2,000+</div>
                <div className="text-muted-foreground text-sm">
                  High-Quality Products
                </div>
              </div>
              <div className="flex items-center">
                <Separator orientation="vertical" />
              </div>
              <div className="flex flex-1 flex-col justify-center pl-8 text-left">
                <div className="text-2xl font-bold text-black">30,000+</div>
                <div className="text-muted-foreground text-sm">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 hidden h-full w-1/2 lg:block">
        <Images.heroBg className="h-full w-full object-cover" />
      </div>
    </section>
  );
};
