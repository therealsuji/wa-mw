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
  onSortChange: (sort: string) => void;
}

export const ShopHeader = ({ onSortChange }: ShopHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">Shop</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            Sort
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => onSortChange("price-asc")}>
            Price: Low to High
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("price-desc")}>
            Price: High to Low
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("rating-desc")}>
            Highest Rated
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("name-asc")}>
            Name: A to Z
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

