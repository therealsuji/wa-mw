"use client";

import Image from "next/image";

import { Counter } from "@/components/molecules/counter";
import { Card } from "@/components/ui/card";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  category: string;
  size?: string;
  qty: number;
};

interface CartItemProps {
  item: CartItem;
  onQtyChange: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
}

export const CartItemCard = ({
  item,
  onQtyChange,
  onRemove,
}: CartItemProps) => {
  return (
    <Card className="group relative shadow-none transition-shadow duration-200 ease-out hover:shadow-md">
      <button
        type="button"
        aria-label="Remove item"
        onClick={() => onRemove(item.id)}
        className="bg-foreground text-background pointer-events-none absolute -top-3 -left-3 flex size-8 -translate-x-2 -translate-y-2 scale-95 items-center justify-center rounded-full leading-none opacity-0 shadow-sm transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
      >
        ×
      </button>

      <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4 p-4 sm:grid-cols-[120px_1fr_auto]">
        <div className="relative aspect-square w-20 sm:w-28">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-contain"
          />
        </div>

        <div>
          <div className="mb-1 text-sm font-medium text-black">
            {item.title}
          </div>
          {item.size && (
            <div className="text-muted-foreground text-xs">Size: {item.size}</div>
          )}
          <div className="text-primary mt-2">${item.price.toFixed(2)}</div>
        </div>

        <div className="flex items-center gap-3">
          <Counter
            value={item.qty}
            onChange={(v) => onQtyChange(item.id, v)}
            min={1}
            max={99}
          />
        </div>
      </div>
    </Card>
  );
};
