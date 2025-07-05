"use client";
import { useState, useEffect } from "react";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useSearch } from "@/contexts/SearchContext";
import { Input } from "@/components/ui/input";

export default function PriceFilter() {
  const { setPrice, price } = useSearch();
  const [sliderValue, setSliderValue] = useState(price || 100);

  useEffect(() => {
    const handler = setTimeout(() => setPrice(sliderValue), 500);
    return () => clearTimeout(handler);
  }, [sliderValue]);

  // useEffect(() => {
  //   setSliderValue(price || 100);
  // }, [price]);

  return (
    <div>
      <h2 className="text-lg font-semibold mt-4">Price</h2>
      <Input
        type="range"
        min={0}
        max={100}
        value={sliderValue}
        className="w-full"
        onChange={(e) => setSliderValue(Number(e.target.value))}
      />
      <p className="text-gray-700">Max. ${sliderValue.toFixed(2)}</p>
    </div>
  );
}
