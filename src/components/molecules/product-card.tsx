"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/lib/assets";
import { useCartStore } from "@/lib/stores/cart-store";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  imageUrl: string;
  featured?: boolean;
  category?: string;
}

const isClothingCategory = (category?: string) => {
  return category === "men's clothing" || category === "women's clothing";
};

export const ProductCard = ({
  id,
  title,
  price,
  rating,
  description,
  imageUrl,
  featured = false,
  category,
}: ProductCardProps) => {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const isClothing = isClothingCategory(category);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // If clothing item, redirect to product page for size selection
    if (isClothing) {
      router.push(`/product/${id}`);
      return;
    }

    // For non-clothing items, add directly to cart
    addItem({
      id,
      title,
      price,
      imageUrl,
      category: category ?? "",
      qty: 1,
    });

    toast.success("Added to cart!", {
      description: `1 × ${title}`,
    });
  };

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
            onClick={handleAddToCart}
          >
            <Icons.plus className="mr-2 h-4 w-4" />
            {isClothing ? "Select Options" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </Card>
  );
};
