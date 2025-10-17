import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icons, Images } from "@/lib/assets";

export default function NotFound() {
  return (
    <div className="bg-background relative isolate min-h-[70vh]">
      <div className="absolute inset-0 -z-10 hidden opacity-10 lg:block">
        <Images.heroBg className="object-cover" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <div className="text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
          <span>Page not found</span>
        </div>

        <h1 className="mb-3 text-4xl font-bold tracking-tight text-black lg:text-5xl">
          Oops! We couldn&apos;t find that page
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          The page you are looking for could not be found.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              Go Home
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/shop">
              Browse Shop
              <Icons.arrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
