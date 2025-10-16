import Link from "next/link";

import { Icons } from "@/lib/assets";

export const Footer = () => {
  return (
    <footer className="bg-base-muted w-full">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Link href="/" className="text-3xl font-bold text-black">
                MW.
              </Link>
            </div>
            <p className="mb-6 max-w-md text-sm text-black">
              Modern Walk brings you timeless fashion with a modern edge. From
              everyday essentials to statement pieces.
            </p>
            <div className="flex space-x-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <Icons.facebook className="h-5 w-5 text-black" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <Icons.instagram className="h-5 w-5 text-black" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <Icons.twitter className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-black">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-black hover:text-gray-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-sm text-black hover:text-gray-600"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-sm text-black hover:text-gray-600"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-sm text-black hover:text-gray-600"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-black">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/account"
                  className="text-sm text-black hover:text-gray-600"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-sm text-black hover:text-gray-600"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="text-sm text-black hover:text-gray-600"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/payments"
                  className="text-sm text-black hover:text-gray-600"
                >
                  Payments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-black">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/support"
                  className="text-sm text-black hover:text-gray-600"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-sm text-black hover:text-gray-600"
                >
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-black hover:text-gray-600"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-black hover:text-gray-600"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 border-t border-gray-200"></div>

        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="text-sm text-black">
            © 2025 Modern Walk. All rights reserved.
          </div>

          <div className="flex items-center space-x-3">
            <Icons.visa />
            <Icons.mastercard />
            <Icons.applePay />
            <Icons.googlePay />
          </div>
        </div>
      </div>
    </footer>
  );
};
