"use client";

// import { useSidebar } from "../context/SidebarContext";
import { Settings2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "../../lib/utils";

export default function SearchBar({
  className,
}: Readonly<{ className: string }>) {
  // const { toggleSidebar } = useSidebar();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    
  }
  return (
    <div
      className={cn(
        "flex items-center rounded-[70px] border-[1px] border-secondary-200/40 h-[44px] px-5 gap-5 min-w-[492px] justify-between",
        className
      )}
    >
      <Search />
      <input
        type="text"
        className="outline-none placeholder:text-sm placeholder:text-secondary-400"
        placeholder="Search something here"
        name="search"
        // onChange={(e) => console.log(e.target.value)}
      />
      <Button
        className="bg-white hover:bg-transparent cursor-pointer shadow-none"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(e);
          }
        }
      }
        onClick={(e) => {
          handleSearch(e);
        }}
      >
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
