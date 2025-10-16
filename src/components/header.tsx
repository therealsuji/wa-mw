import Link from "next/link";

import { Icons } from "@/lib/assets";

export const Header = () => {
  return (
    <header className="bg-background w-full border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="mr-20 text-2xl font-bold text-black">
          MW.
        </Link>

        <nav className="hidden md:flex md:space-x-8">
          <Link href="/shop" className="text-black hover:text-gray-600">
            Shop
          </Link>
          <Link href="/brands" className="text-black hover:text-gray-600">
            Brands
          </Link>
          <Link href="/about" className="text-black hover:text-gray-600">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-600">
            Contact
          </Link>
        </nav>

        <div className="hidden sm:flex sm:flex-1 sm:justify-center">
          <div className="relative w-full max-w-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Icons.search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 text-sm placeholder-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-black hover:text-gray-600">
            <Icons.cart />
          </button>
          <button className="text-black hover:text-gray-600">
            <Icons.user />
          </button>
        </div>
      </div>
    </header>
  );
};
