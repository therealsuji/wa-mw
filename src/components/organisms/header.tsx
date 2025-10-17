import Link from "next/link";

import { Icons } from "@/lib/assets";

import CartButton from "./cart-button";

export const Header = () => {
  return (
    <header className="bg-background border-border w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="mr-20 text-2xl font-bold text-black">
          MW.
        </Link>

        <nav className="hidden md:flex md:space-x-8">
          <Link
            href="/shop"
            className="text-primary hover:text-muted-foreground"
          >
            Shop
          </Link>
          <Link
            href="/brands"
            className="text-primary hover:text-muted-foreground"
          >
            Brands
          </Link>
          <Link
            href="/about"
            className="text-primary hover:text-muted-foreground"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-primary hover:text-muted-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden sm:flex sm:flex-1 sm:justify-center">
          <div className="relative w-full max-w-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Icons.search className="text-muted-foreground h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="border-input bg-background placeholder-muted-foreground focus:border-input focus:ring-input block w-full rounded-md border py-2 pr-3 pl-10 text-sm focus:ring-1 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <CartButton />
          <button className="text-primary hover:text-muted-foreground">
            <Icons.user />
          </button>
        </div>
      </div>
    </header>
  );
};
