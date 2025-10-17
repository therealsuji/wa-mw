"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email?.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

     setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully subscribed to our newsletter!", {
        description: `We'll send updates to ${email}`,
      });
      setEmail("");
    }, 1000);
  };

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

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-input text-primary placeholder:text-muted-foreground h-12 pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <Button
                type="submit"
                variant="secondary"
                className="w-full"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
