import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonProductCard = () => {
  return (
    <div className="overflow-hidden p-4 shadow-none border rounded-md">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <div className="flex items-center gap-1">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-8" />
        </div>
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
      <Skeleton className="mt-4 h-10 w-full" />
    </div>
  );
};
