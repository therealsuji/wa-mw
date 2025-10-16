"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/lib/assets";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  price: number;
  rating: number;
  description: string;
  imageUrl: string;
  featured?: boolean;
}

export const ProductCard = ({
  title,
  price,
  rating,
  description,
  imageUrl,
  featured = false,
}: ProductCardProps) => {
  return (
    <Card
      className={cn(
        "overflow-hidden p-4 shadow-none",
        featured ? "border-2 border-black" : "border"
      )}
    >
      <div className="flex flex-col">
        {/* Product Image */}
        <div className="bg-background relative aspect-square h-56 w-full p-6">
          <Image src={imageUrl} alt={title} fill className="object-contain" />
        </div>

        {/* Product Details */}
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <h3 className="text-primary mb-2 text-base font-semibold">
              {title}
            </h3>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-primary text-base">
                ${price.toFixed(2)}
              </span>
              <div className="flex items-center gap-1">
                <Icons.star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-muted-foreground text-base">
                  {rating.toFixed(1)}/5
                </span>
              </div>
            </div>
            <p className="text-muted-foreground line-clamp-2 text-xs">
              {description}
            </p>
          </div>

          {/* Add to Cart Button */}
          <Button
            role="button"
            variant={featured ? "default" : "secondary"}
            className="w-full cursor-pointer"
            size="lg"
          >
            <Icons.plus className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};
