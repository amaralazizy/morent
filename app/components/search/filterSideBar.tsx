
import { cn } from "@/lib/utils";
import TypeFilter from "@/app/components/search/TypeFilter";
import CapacityFilter from "@/app/components/search/CapacityFilter";
import PriceFilter from "@/app/components/search/PriceFilter";
import { memo } from "react";
function FilterSidebar({
  className,
}: Readonly<{ className?: string }>) {
  // TODO: Make the filter sidebar sticky
  return (
    <aside
      className={cn("w-64 p-4 bg-white overflow-y-auto sticky top-0", className)}
    >
      <TypeFilter />
      <CapacityFilter />
      <PriceFilter />
    </aside>
  );
}

export default memo(FilterSidebar);
