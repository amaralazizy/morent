import { Skeleton } from "@/app/components/ui/skeleton";

export default function CarCardSkeleton() {
  return (
    <div className="p-6 bg-white rounded-[10px] animate-pulse max-h-[300px]">
      {/* Header section with title and heart */}
      <div className="flex justify-between mb-16">
        <div className="grid gap-1">
          {/* Car name */}
          <Skeleton className="h-6 w-32 bg-gray-200 rounded" />
          {/* Car type */}
          <Skeleton className="h-4 w-20 bg-gray-200 rounded" />
        </div>
        {/* Heart icon */}
        <Skeleton className="w-6 h-6 bg-gray-200 rounded" />
      </div>

      {/* Car image section */}
      <div className="relative px-9 mb-16">
        <Skeleton className="rounded-[10px] w-[250px] h-[170px] bg-gray-200 mx-auto" />
        {/* Gradient overlay effect */}
        <div className="bg-gradient-to-b from-transparent to-white h-full w-full absolute top-1/3 left-0 overflow-hidden"></div>
      </div>

      {/* Specifications section */}
      <div className="flex text-sm text-secondary-300 justify-around mb-8">
        {/* Fuel specification */}
        <div className="flex justify-between items-center gap-1.5">
          <Skeleton className="w-4 h-4 bg-gray-200 rounded" />
          <Skeleton className="w-8 h-4 bg-gray-200 rounded" />
        </div>
        {/* Transmission specification */}
        <div className="flex justify-between items-center gap-1.5">
          <Skeleton className="w-4 h-4 bg-gray-200 rounded" />
          <Skeleton className="w-12 h-4 bg-gray-200 rounded" />
        </div>
        {/* Capacity specification */}
        <div className="flex justify-between items-center gap-1.5">
          <Skeleton className="w-4 h-4 bg-gray-200 rounded" />
          <Skeleton className="w-16 h-4 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Price and button section */}
      <div className="flex gap-6 justify-between items-end">
        <div className="space-y-1">
          {/* Price */}
          <div className="flex items-baseline gap-1">
            <Skeleton className="w-16 h-6 bg-gray-200 rounded" />
            <Skeleton className="w-8 h-4 bg-gray-200 rounded" />
          </div>
          {/* Original price (strikethrough) */}
          <Skeleton className="w-12 h-4 bg-gray-200 rounded" />
        </div>
        {/* Rent Now button */}
        <Skeleton className="w-24 h-10 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
