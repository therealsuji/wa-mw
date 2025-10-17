"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/lib/assets";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  imageUrl: string;
  featured?: boolean;
}

export const ProductCard = ({
  id,
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
      <div className="flex h-full flex-col justify-between">
        <Link href={`/product/${id}`} className="flex flex-col gap-4">
          <div className="bg-background relative aspect-square h-56 w-full p-6">
            <Image src={imageUrl} alt={title} fill className="object-contain" />
          </div>
          <h3 className="text-primary line-clamp-2 text-base font-semibold">
            {title}
          </h3>
        </Link>
        <div className="mt-4 flex flex-col gap-4">
          <div>
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
