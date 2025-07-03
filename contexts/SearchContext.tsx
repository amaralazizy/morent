// context/SearchContext.tsx
"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import debounce from "lodash/debounce";

interface SearchContextType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selectedTypes: string[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCapacities: string[];
  setSelectedCapacities: React.Dispatch<React.SetStateAction<string[]>>;
  price: number | null;
  setPrice: React.Dispatch<React.SetStateAction<number | null>>;
  handleSearch: () => void;
}

const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: () => {},
  selectedTypes: [],
  setSelectedTypes: () => {},
  selectedCapacities: [],
  setSelectedCapacities: () => {},
  price: null,
  setPrice: () => {},
  handleSearch: () => {},
});

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider", { cause: "SearchProvider not found" });
  }
  return context;
};

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [price, setPrice] = useState<number | null>(null);
  const searchParams = useSearchParams();

  // Create a debounced function that handles the search logic
  const debouncedSearch = debounce(() => {
    const params = new URLSearchParams(searchParams);
    if (search !== "") {
      params.set("query", search.toString());
      if (selectedTypes.length > 0) params.set("type", selectedTypes.join(","));
      if (selectedCapacities.length > 0)
        params.set("capacity", selectedCapacities.join(","));
      if (price) params.set("price", price.toString());
    }
    window.location.href = `/search?${params.toString()}`;
  }, 500);

  // Create memoized version of the debounced function
  const handleSearch = useCallback(() => {
    debouncedSearch();
  }, [debouncedSearch]);
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        selectedTypes,
        setSelectedTypes,
        selectedCapacities,
        setSelectedCapacities,
        price,
        setPrice,
        handleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
