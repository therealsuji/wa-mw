import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import { Categories } from "@/app/_components/categories";
import { FlashSale } from "@/app/_components/flash-sale";
import { Hero } from "@/app/_components/hero";
import { LatestProducts } from "@/app/_components/latest-products";
import { MostPopular } from "@/app/_components/most-popular";
import { Newsletter } from "@/app/_components/newsletter";
import { Sale } from "@/app/_components/sale";
import { getAllProducts } from "@/lib/api/products";
import { productKeys } from "@/lib/api/query-keys";
import { getQueryClient } from "@/lib/server-query-client";

export default async function HomePage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: productKeys.list(),
    queryFn: () => getAllProducts(),
  });

  await queryClient.prefetchQuery({
    queryKey: productKeys.list({ limit: 8, sort: "desc" }),
    queryFn: () => getAllProducts({ limit: 8, sort: "desc" }),
  });

  await queryClient.prefetchQuery({
    queryKey: productKeys.list({ limit: 4 }),
    queryFn: () => getAllProducts({ limit: 4 }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Hero />
      <Categories />
      <FlashSale />
      <MostPopular />
      <Sale />
      <LatestProducts />
      <Newsletter />
    </HydrationBoundary>
  );
}
