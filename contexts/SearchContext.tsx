// context/SearchContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";

interface SearchContextType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selectedTypes: string[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCapacities: string[];
  setSelectedCapacities: React.Dispatch<React.SetStateAction<string[]>>;
  price: number | null;
  setPrice: React.Dispatch<React.SetStateAction<number | null>>;
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
});

export const useSearch = () => useContext(SearchContext);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [price, setPrice] = useState<number | null>(null);
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
