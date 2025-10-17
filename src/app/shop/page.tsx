"use client";

import { useState } from "react";

import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { CategoryFilter } from "./_components/category-filter";
import { ProductGrid } from "./_components/product-grid";
import { ShopHeader } from "./_components/shop-header";

const allProducts = [
  {
    id: 1,
    title: "Urban Slim-Fit Shirt",
    price: 65.0,
    rating: 4.5,
    description:
      "Crisp, breathable cotton crafted into a modern slim-fit silhouette for a sharp...",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    category: ["new-arrivals", "men"],
  },
  {
    id: 2,
    title: "Classic Cotton Shorts",
    price: 95.0,
    rating: 4.5,
    description:
      "Lightweight cotton shorts with a tailored fit, perfect for casual days",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    category: ["new-arrivals", "men"],
  },
  {
    id: 3,
    title: "Oversized Hoodie",
    price: 59.0,
    rating: 4.5,
    description: "Premium fleece hoodie with a relaxed, comfort and cozy fit.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    category: ["new-arrivals", "unisex"],
  },
  {
    id: 4,
    title: "Sleeveless Blouse",
    price: 40.0,
    rating: 3.0,
    description:
      "A lightweight, breathable blouse designed for effortless style on warm days. Crafted...",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    category: ["new-arrivals", "women"],
  },
  {
    id: 5,
    title: "Women's Cargo Pant",
    price: 59.0,
    rating: 4.5,
    description:
      "Utility-inspired with multiple pockets and a relaxed straight fit.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    category: ["new-arrivals", "women"],
  },
  {
    id: 6,
    title: "Women's Jean Jacket",
    price: 65.0,
    rating: 4.5,
    description: "Classic denim with a cropped cut for a modern twist.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    category: ["new-arrivals", "women"],
  },
  {
    id: 7,
    title: "Men's Cotton Jacket",
    price: 95.0,
    rating: 4.5,
    description:
      "A timeless layering essential made from durable yet lightweight cotton. This...",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    category: ["new-arrivals", "men"],
  },
  {
    id: 8,
    title: "Strap Top Blouse",
    price: 40.0,
    rating: 4.5,
    description:
      "Soft satin straps with a relaxed fit, ideal for layering or wearing solo.",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    category: ["new-arrivals", "women"],
  },
  {
    id: 9,
    title: "Urban Slim-Fit Shirt",
    price: 65.0,
    rating: 4.5,
    description:
      "Crisp, breathable cotton crafted into a modern slim-fit silhouette for a sharp...",
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    category: ["new-arrivals", "men"],
  },
];

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "new-arrivals",
  ]);
  const [sortBy, setSortBy] = useState<string>("name-asc");

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
  };

  // Filter products based on selected categories
  const filteredProducts = allProducts.filter((product) =>
    selectedCategories.some((cat) => product.category.includes(cat))
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating-desc":
        return b.rating - a.rating;
      case "name-asc":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Shop</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Shop Header */}
      <div className="mb-8">
        <ShopHeader onSortChange={handleSortChange} />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_1fr]">
        {/* Sidebar */}
        <aside>
          <CategoryFilter
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
          />
        </aside>

        {/* Product Grid */}
        <div className="space-y-8">
          <ProductGrid products={sortedProducts} />

          {/* Pagination */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
