"use client";
import { cn } from "@/lib/utils";
import TypeFilter from "@/components/TypeFilter";
import CapacityFilter from "@/components/CapacityFilter";
import PriceFilter from "@/components/PriceFilter";
import { memo } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import { useMediaQuery } from "@/hooks/use-mediaquery";
import Overlay from "@/components/Overlay";
import { X } from "lucide-react";

function FilterSidebar({ className }: Readonly<{ className?: string }>) {
  const { showSidebar, toggleSidebar } = useSidebar();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <aside
        className={cn(
          "w-64 p-4 bg-white overflow-y-auto z-50 top-0 transition-transform duration-300 ",
          showSidebar || isDesktop ? "translate-x-0" : "-translate-x-full",
          !isDesktop && "fixed h-full",
          className
        )}
      >
        {showSidebar && (
          <X
            onClick={toggleSidebar}
            className="text-primary-500 float-end cursor-pointer"
          />
        )}
        <TypeFilter />
        <CapacityFilter />
        <PriceFilter />
      </aside>
      {showSidebar && <Overlay className="z-40" />}
    </>
  );
}

export default memo(FilterSidebar);
