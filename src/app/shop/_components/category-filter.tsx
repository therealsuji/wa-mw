"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useCategories } from "@/lib/hooks/use-products";

interface CategoryFilterProps {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({
  selectedCategories,
  onCategoryChange,
}: CategoryFilterProps) => {
  const { data: categories, isLoading } = useCategories();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Category</h3>
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-4 w-24 animate-pulse rounded bg-gray-200" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Category</h3>
      <div className="space-y-3">
        {categories?.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox
              id={category}
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => onCategoryChange(category)}
            />
            <label
              htmlFor={category}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer capitalize"
            >
              {category.replace("'s", "'s").replace("-", " ")}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

