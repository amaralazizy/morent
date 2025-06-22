"use client";
import { useSearch } from "@/contexts/SearchContext";
import { useState, useEffect } from "react";
import { categories } from "@/data/database";

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
        <label key={name} className="flex items-center space-x-2 mb-2">
          <input
            type="checkbox"
            checked={selectedTypes.includes(name)}
            onChange={() => handleFilterChange(name)}
            className="form-checkbox text-blue-500"
          />
          <span className="text-gray-700">
            {name} ({count})
          </span>
        </label>
      ))}
    </div>
  );
}
