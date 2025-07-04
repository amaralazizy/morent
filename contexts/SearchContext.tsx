// context/SearchContext.tsx
"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
// import { useSearchParams } from "next/navigation";
import debounce from "lodash/debounce";
import { useRouter } from "next/navigation";

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
    throw new Error("useSearch must be used within a SearchProvider", {
      cause: "SearchProvider not found",
    });
  }
  return context;
};

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [price, setPrice] = useState<number | null>(null);
  // const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = useCallback(
    debounce(() => {
      const params = new URLSearchParams();
      if (search) params.set("query", search);
      if (selectedTypes.length) params.set("type", selectedTypes.join(","));
      if (selectedCapacities.length)
        params.set("capacity", selectedCapacities.join(","));
      if (price !== null) params.set("price", price.toString());

      router.push(`/search?${params.toString()}`);
    }, 500),
    [search, selectedTypes, selectedCapacities, price]
  );

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
