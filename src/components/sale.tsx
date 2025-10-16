"use client";

import { Icons, Images } from "@/lib/assets";

export const Sale = () => {
  return (
    <section className="bg-background py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-lg bg-gray-100">
          <div className="grid grid-cols-1 items-center gap-8 p-12 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="relative inline-block text-3xl font-bold text-black">
                  Autumn Sale
                  <Icons.glint className="absolute -top-8 -right-8 h-8 w-8" />
                </h2>
                <p className="text-muted-foreground text-sm">
                  Limited time only. Don&apos;t miss out!
                </p>
              </div>
              <div className="text-4xl font-bold text-black">40% Off</div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-lg">
                <Images.autumnSale className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
