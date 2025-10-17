"use client";

import { useEffect, useMemo, useState } from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { SkeletonProductCard } from "@/components/molecules/skeleton-product-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useProducts } from "@/lib/hooks/use-products";
import { mapUrlCategoryToApi } from "@/lib/api/categories";

import { CategoryFilter } from "./_components/category-filter";
import { PaginationComponent } from "./_components/pagination";
import { ProductGrid } from "./_components/product-grid";
import { ShopHeader } from "./_components/shop-header";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("name-asc");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  const { data: products, isLoading, error } = useProducts();

  // Filter products if url has category param
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const apiCategory = mapUrlCategoryToApi(categoryParam);
      setSelectedCategories([apiCategory]);
    } else {
      setSelectedCategories([]);
    }
  }, [searchParams]);

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
  const filteredProducts = useMemo(() => {
    if (!products) return [];

    // If no categories are selected, show all products
    if (selectedCategories.length === 0) {
      return products;
    }

    return products.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }, [products, selectedCategories]);

  // Sort products
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating-desc":
          return b.rating.rate - a.rating.rate;
        case "name-asc":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, sortBy]);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 h-6 w-48 animate-pulse rounded bg-gray-200" />
        <div className="mb-8 h-12 w-full animate-pulse rounded bg-gray-200" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_1fr]">
          <aside>
            <div className="space-y-4">
              <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-24 animate-pulse rounded bg-gray-200"
                />
              ))}
            </div>
          </aside>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonProductCard key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="text-center text-red-600">
          Failed to load products. Please try again later.
        </div>
      </div>
    );
  }

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
        <ShopHeader sortBy={sortBy} onSortChange={handleSortChange} />
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
          <ProductGrid products={paginatedProducts} />

          {/* Pagination */}
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
