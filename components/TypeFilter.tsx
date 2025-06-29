"use client";
import { useSearch } from "@/contexts/SearchContext";
import { useState, useEffect } from "react";
import { categories } from "@/data/database";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function TypeFilter() {
  const { selectedTypes, setSelectedTypes } = useSearch();
  const [checkedTypes, setcheckedTypes] = useState(selectedTypes);

  useEffect(() => {
    const handler = setTimeout(() => setSelectedTypes(checkedTypes), 500);
    return () => clearTimeout(handler);
  }, [checkedTypes]);

  const handleFilterChange = (category: string) => {
    setcheckedTypes((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Type</h2>
      {categories.map(({ name, count }) => (
        <div key={name} className="flex items-center space-x-2 mb-2">
          <Input
            type="checkbox"
            checked={selectedTypes.includes(name)}
            onChange={() => handleFilterChange(name)}
            className="w-4 aspect-square text-blue-500"
            id={name}
          />
          <Label key={name} className="text-gray-700" htmlFor={name}>
            {name} ({count})
          </Label>
        </div>
      ))}
    </div>
  );
}
