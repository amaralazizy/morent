"use client";

// import { useSidebar } from "../context/SidebarContext";
import { Settings2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "../lib/utils";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useSearch } from "@/contexts/SearchContext";
import { useEffect } from "react";
export default function SearchBar({
  className,
}: Readonly<{ className: string }>) {
  const {
    search,
    setSearch,
    selectedTypes,
    selectedCapacities,
    price,
    setSelectedTypes,
    setSelectedCapacities,
    setPrice,
  } = useSearch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleSearch() {
    const params = new URLSearchParams();
    if (search) {
      params.set("query", search.toString());
      if (selectedTypes.length > 0) params.set("type", selectedTypes.join(","));
      if (selectedCapacities.length > 0)
        params.set("capacity", selectedCapacities.join(","));
      if (price) params.set("price", price.toString());
    }
    router.push(`/search?${params.toString()}`);
  }

  useEffect(() => {
    if (pathname === "/search") handleSearch();
  }, [price, selectedTypes, selectedCapacities, search]);

  useEffect(() => {
    setSearch(searchParams.get("query") || "");
    setSelectedTypes(searchParams.get("type")?.split(",") || []);
    setSelectedCapacities(searchParams.get("capacity")?.split(",") || []);
    setPrice(Number(searchParams.get("price")) || null);
  }, []);

  return (
    <div
      className={cn(
        "flex items-center rounded-[70px] border-[1px] border-secondary-200/40 h-[44px] px-5 gap-5 min-w-[492px] justify-between",
        className
      )}
    >
      <Button
        className="bg-transparent hover:bg-transparent cursor-pointer shadow-none"
        onClick={() => {
          if (search !== "") handleSearch();
        }}
      >
        <Search className="text-black  scale-140" />
      </Button>
      <input
        type="text"
        className="outline-none placeholder:text-sm placeholder:text-secondary-400"
        placeholder="Search something here"
        name="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <Button className="bg-white hover:bg-transparent cursor-pointer shadow-none">
        <Settings2 className="text-black scale-140" />
      </Button>
    </div>
  );
}

export function MobileSearchBar({
  className,
}: Readonly<{ className: string }>) {
  return (
    <div className={cn("flex gap-2", className)}>
      <div className="flex items-center gap-5 border-1 border-secondary-200/40 px-6 py-3 rounded-lg flex-1">
        <Search className="text-secondary-400 max-sm:scale-80" />
        <input
          type="text"
          className="outline-none placeholder:text-sm placehold:text-ellipsis placeholder:text-secondary-400 flex-1"
          placeholder="Search something here"
        />
      </div>
      <div>
        <button className="bg-white hover:bg-transparent cursor-pointer border-1 border-secondary-200/40 rounded-lg p-3 h-full aspect-square">
          <Settings2 className="text-secondary-400" />
        </button>
      </div>
    </div>
  );
}
