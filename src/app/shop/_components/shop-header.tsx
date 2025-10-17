"use client";

import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ShopHeaderProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const getSortLabel = (sort: string): string => {
  const sortLabels: Record<string, string> = {
    "price-asc": "Price: Low to High",
    "price-desc": "Price: High to Low",
    "rating-desc": "Highest Rated",
    "name-asc": "Name: A to Z",
  };

  return sortLabels[sort] ?? "Sort";
};

export const ShopHeader = ({ sortBy, onSortChange }: ShopHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">Shop</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            {getSortLabel(sortBy)}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => onSortChange("price-asc")}>
            {getSortLabel("price-asc")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("price-desc")}>
            {getSortLabel("price-desc")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("rating-desc")}>
            {getSortLabel("rating-desc")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("name-asc")}>
            {getSortLabel("name-asc")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
