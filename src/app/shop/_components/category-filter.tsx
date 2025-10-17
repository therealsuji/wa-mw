"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface CategoryFilterProps {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "unisex", label: "Unisex" },
  { id: "accessories", label: "Accessories" },
];

export const CategoryFilter = ({
  selectedCategories,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Category</h3>
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2">
            <Checkbox
              id={category.id}
              checked={selectedCategories.includes(category.id)}
              onCheckedChange={() => onCategoryChange(category.id)}
            />
            <label
              htmlFor={category.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {category.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

