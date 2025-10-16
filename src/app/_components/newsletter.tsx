"use client";

import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-lg bg-black">
          <div className="grid grid-cols-1 items-center gap-8 p-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white lg:text-4xl">
                Subscribe to
                <br />
                Our Newsletter
              </h2>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-input text-primary placeholder:text-muted-foreground h-12 pl-10"
                />
              </div>
              <Button variant="secondary" className="w-full" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
