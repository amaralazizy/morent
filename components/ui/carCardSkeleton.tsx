import { Skeleton } from "@/components/ui/skeleton";

export default function CarCardSkeleton() {
  return (
    <div className="p-6 bg-white rounded-[10px]">
      <div className="flex justify-between mb-16">
          <Skeleton className="h-5 w-3/5 bg-gray-200" />
      </div>
      <div className="relative px-9 mb-16">
        <Skeleton className="rounded-[10px] w-[250px] h-[170px] object-cover mx-auto" />
        <div className="bg-gradient-to-b from-transparent to-white h-full w-full absolute top-1/3 left-0 overflow-hidden"></div>
      </div>
      <div className="flex text-sm text-secondary-300 justify-around mb-8">
        <div className="flex justify-between items-center gap-1.5">
          <Skeleton className="w-4 aspect-square" />
          <Skeleton className="w-24 h-5 font-medium" />
        </div>
        <div className="flex justify-between items-center gap-1.5">
          <Skeleton className="w-4 aspect-square" />
          <Skeleton className="w-24 h-5 font-medium" />
        </div>
        <div className="flex justify-between items-center gap-1.5">
          <Skeleton className="w-4 aspect-square" />
          <Skeleton className="text-sm font-medium"/>
        </div>
      </div>
      <div className="flex gap-6 justify-between">
        <div>
          <p>
            <Skeleton className="w-24 h-5 font-bold text-secondary-500"/>
          </p>
            <Skeleton className="w-24 h-5 text-secondary-300 line-through"/>
        </div>
        <Skeleton className="w-24 h-8 text-white px-5 py-2.5 rounded bg-primary-500 hover:bg-primary-500 cursor-pointer"/>
      </div>
    </div>
  );
}