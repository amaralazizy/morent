import { cn } from "@/lib/utils";
import TypeFilter from "@/components/TypeFilter";
import CapacityFilter from "@/components/CapacityFilter";
import PriceFilter from "@/components/PriceFilter";
import { memo } from "react";
function FilterSidebar({ className }: Readonly<{ className?: string }>) {
  // TODO: Make the filter sidebar sticky
  return (
    <aside
      className={cn(
        "w-64 p-4 bg-white overflow-y-auto sticky top-0",
        className
      )}
    >
      <TypeFilter />
      <CapacityFilter />
      <PriceFilter />
    </aside>
  );
}

export default memo(FilterSidebar);
