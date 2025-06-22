"use client";
import { useSearch } from "@/contexts/SearchContext";
import { memo } from "react";

const capacities = [
  { name: "2 Person", count: 10 },
  { name: "4 Person", count: 14 },
  { name: "6 Person", count: 12 },
  { name: "8 or More", count: 16 },
];

function CapacityFilter() {
  const { selectedCapacities, setSelectedCapacities } = useSearch();
  const handleFilterChange = (capacity: string) => {
    setSelectedCapacities((prev) =>
      prev.includes(capacity)
        ? prev.filter((c) => c !== capacity)
        : [...prev, capacity]
    );
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mt-4 mb-2">Capacity</h2>
      {capacities.map(({ name, count }) => (
        <label key={name} className="flex items-center space-x-2 mb-2">
          <input
            type="checkbox"
            checked={selectedCapacities.includes(name)}
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

export default memo(CapacityFilter);
