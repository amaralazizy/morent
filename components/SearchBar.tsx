// TODO: Fix search

"use client";

import { Search, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useSearch } from "@/contexts/SearchContext";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/contexts/SidebarContext";
import { useSearchParams } from "next/navigation";


export default function SearchBar({
  className,
}: Readonly<{ className?: string }>) {
  const {
    search,
    setSearch,
    // selectedTypes,
    // selectedCapacities,
    // price,
    setSelectedTypes,
    setSelectedCapacities,
    setPrice,
    handleSearch,
  } = useSearch();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // const {toggleSidebar} = useSidebar();

  useEffect(() => {
    setSearch(searchParams.get("query") || "");
    setSelectedTypes(searchParams.get("type")?.split(",") || []);
    setSelectedCapacities(searchParams.get("capacity")?.split(",") || []);
    setPrice(Number(searchParams.get("price")) || null);
  }, [searchParams]);

  // useEffect(() => {
  //   if (pathname === "/search") handleSearch();
  // }, [price, selectedTypes, selectedCapacities, pathname, search]);

  // useEffect(() => {
  //   if (pathname === "/search") handleSearch();
  // }, [price, selectedTypes, selectedCapacities, search]);

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   setSearch(params.get("query") || "");
  //   setSelectedTypes(params.get("type")?.split(",") || []);
  //   setSelectedCapacities(params.get("capacity")?.split(",") || []);
  //   setPrice(Number(params.get("price")) || null);
  // }, [setSearch, setSelectedTypes, setSelectedCapacities, setPrice]);

  return (
    <div
      className={cn(
        "flex items-center rounded-[70px] border-[1px] border-secondary-200/40 h-[44px] pl-5 gap-5 min-w-[492px] justify-between  has-[input:focus-visible]:ring-primary-500 has-[input:focus-visible]:ring-[1px] has-[input:focus-visible]:outline-none shadow-primary-500 shadow-sm",
        pathname !== "/search" && "min-w-full overflow-hidden",
        className
      )}
    >
      <Search className="text-black  scale-140" />
      <Input
        type="text"
        className="outline-none placeholder:text-[calc(0.375rem+0.625vw)] placeholder:text-secondary-400 focus-visible:ring-primary-500 border-none"
        placeholder="Search something here"
        name="search"
        onChange={(e) => {
          const val = e.target.value;
          setSearch(val);
          if (val !== "" && pathname === "/search") handleSearch();
        }}
        defaultValue={searchParams.get("query") || ""}
        onKeyDown={(e) => {
          if (e.key === "Enter" && pathname !== "/search" && search !== "")
            handleSearch();
        }}
      />
      {pathname !== "/search" && (
        <Button
          className=" hover:bg-primary-500 cursor-pointer shadow-none bg-primary-500 scale-120 rounded-l-none pl-1"
          onClick={() => {
            if (search !== "") handleSearch();
          }}
        >
          Search
        </Button>
      )}
      {/* {pathname === "/search" && <Button className=" hover:bg-primary-500 cursor-pointer shadow-none bg-primary-500 scale-120 rounded-l-none pl-1" 
      onClick={() => {
          toggleSidebar();
        }}>
        <Settings2/>
      </Button>} */}
    </div>
  );
}

export function MobileSearchBar({
  className,
}: Readonly<{ className?: string }>) {
  const { search, setSearch, handleSearch } = useSearch();
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  return (
    <div className={cn("flex gap-4 w-full", className)}>
      <div className="flex items-center gap-5 border-1 border-secondary-200/40 px-6 py-3 rounded-lg flex-1">
        <Search className="text-secondary-400 max-sm:scale-80" />
        <Input
          type="text"
          className="outline-none placeholder:text-[calc(0.25rem+2vw)] placeholder:text-secondary-400 flex-1 border-none shadow-none"
          placeholder="Search something here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {pathname !== "/search" && (
        <Button
          variant="outline"
          className="text-primary-500 hover:text-primary-600 hover:bg-primary-100 h-full"
          onClick={() => {
            if (search !== "") handleSearch();
          }}
        >
          Search
        </Button>
      )}
      {pathname === "/search" && (
        <Button
          className=" text-primary-500 hover:text-primary-600 hover:bg-primary-100 h-full bg-secondary-100 aspect-square"
          onClick={toggleSidebar}
        >
          <Settings2 className="scale-150" />
        </Button>
      )}
    </div>
  );
}
