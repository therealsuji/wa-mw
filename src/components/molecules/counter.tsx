"use client";

import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export const Counter = ({
  value,
  onChange,
  min = 0,
  max = 999,
  className = "",
}: CounterProps) => {
  const handleIncrement = () => {
    const newValue = Math.min(value + 1, max);
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(value - 1, min);
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      onChange(min);
      return;
    }

    const numValue = parseInt(inputValue, 10);
    if (!isNaN(numValue)) {
      const clampedValue = Math.min(Math.max(numValue, min), max);
      onChange(clampedValue);
    }
  };

  return (
    <div className={cn("bg-base-muted inline-flex rounded-md p-1", className)}>
      <Button
        variant="outline"
        size="icon-sm"
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        id="number-of-gpus-f6l"
        value={value}
        onChange={handleInputChange}
        placeholder="8"
        size={3}
        className="h-8 w-14 rounded-none border-none bg-transparent text-center font-mono shadow-none focus:ring-0"
        maxLength={3}
      />
      <Button
        variant="outline"
        size="icon-sm"
        type="button"
        onClick={handleIncrement}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};
