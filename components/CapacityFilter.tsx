"use client";
import { useSearch } from "@/contexts/SearchContext";
import { Label } from "@/components/ui/label";
import { memo } from "react";
import { Input } from "@/components/ui/input";
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
        <div key={name} className="flex items-center space-x-2 mb-2">
          <Input
            type="checkbox"
            checked={selectedCapacities.includes(name)}
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

export default memo(CapacityFilter);
