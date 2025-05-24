"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = [
  { name: "Sport", count: 10 },
  { name: "SUV", count: 12 },
  { name: "MPV", count: 16 },
  { name: "Sedan", count: 20 },
  { name: "Coupe", count: 14 },
  { name: "Hatchback", count: 14 },
];

const capacities = [
  { name: "2 Person", count: 10 },
  { name: "4 Person", count: 14 },
  { name: "6 Person", count: 12 },
  { name: "8 or More", count: 16 },
];

export default function FilterSidebar({className}: Readonly<{className?: string}>) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [price, setPrice] = useState(100);

  const handleFilterChange = (
    category: string,
    setFilter: (filters: string[]) => void,
    filters: string[]
  ) => {
    setFilter(
      filters.includes(category)
        ? filters.filter((c) => c !== category)
        : [...filters, category]
    );
  };

  return (
    <aside
      className={cn("w-64 p-4 bg-white h-full overflow-y-auto", className)}
    >
      <h2 className="text-lg font-semibold mb-4">Type</h2>
      {categories.map(({ name, count }) => (
        <label key={name} className="flex items-center space-x-2 mb-2">
          <input
            type="checkbox"
            checked={selectedTypes.includes(name)}
            onChange={() =>
              handleFilterChange(name, setSelectedTypes, selectedTypes)
            }
            className="form-checkbox text-blue-500"
          />
          <span className="text-gray-700">
            {name} ({count})
          </span>
        </label>
      ))}

      <h2 className="text-lg font-semibold mt-4 mb-2">Capacity</h2>
      {capacities.map(({ name, count }) => (
        <label key={name} className="flex items-center space-x-2 mb-2">
          <input
            type="checkbox"
            checked={selectedCapacities.includes(name)}
            onChange={() =>
              handleFilterChange(
                name,
                setSelectedCapacities,
                selectedCapacities
              )
            }
            className="form-checkbox text-blue-500"
          />
          <span className="text-gray-700">
            {name} ({count})
          </span>
        </label>
      ))}

      <h2 className="text-lg font-semibold mt-4 mb-2">Price</h2>
      <input
        type="range"
        min={0}
        max={100}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full"
      />
      <p className="text-gray-700">Max. ${price}.00</p>
    </aside>
  );
}
