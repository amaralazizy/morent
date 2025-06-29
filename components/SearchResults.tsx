"use client";
import { useSearch } from "@/contexts/SearchContext";
import { useEffect, useState } from "react";
import { cars } from "@/data/database";
import CarCard from "@/components/CarCard";
import CarCardSkeleton from "@/components/CarCardSkeleton";
import CarGrid from "@/components/CarGrid";
import { Car } from "@/types/database";
import Loading from "@/app/loading";

export default function SearchResults() {
  const { search, selectedTypes, selectedCapacities, price } = useSearch();
  const [results, setResults] = useState<Car[]>([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingCards, setLoadingCards] = useState(false);
  const [resultCount, setResultCount] = useState(0);
  const [error, setError] = useState(false);

  const mockFetchResults = () => {
    try {
      const filteredResults = cars.filter((car) => {
        return (
          car.name
            .split(" ")
            .join("")
            .toLowerCase()
            .includes(search.split(" ").join("").toLowerCase()) &&
          (selectedTypes.length === 0 || selectedTypes.includes(car.type)) &&
          (selectedCapacities.length === 0 ||
            selectedCapacities.includes(car.capacity.toString())) &&
          car.price - car.discount <= (price ?? 1000000)
        );
      });

      setResultCount(filteredResults.length);
      setInitialLoading(false);
      setLoadingCards(true);

      setTimeout(() => {
        setResults(filteredResults);
        setLoadingCards(false);
      }, 800);
    } catch (error) {
      setError(true);
      setInitialLoading(false);
      setLoadingCards(false);
    }
  };

  useEffect(() => {
    setInitialLoading(true);
    setLoadingCards(false);
    setError(false);
    setResults([]);
    setResultCount(0);

    const timeoutId = setTimeout(() => {
      mockFetchResults();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search, selectedTypes, selectedCapacities, price]);

  if (initialLoading) {
    return <Loading />;
  }

  // Error state
  if (error) {
    return (
      <div className="mt-6 text-center">
        <div className="text-error-500 text-xl font-semibold mb-2">
          Something went wrong
        </div>
        <p className="text-secondary-400">
          Please try again or refresh the page
        </p>
      </div>
    );
  }

  // No results state
  if (resultCount === 0) {
    return (
      <div className="mt-6 text-center">
        <div className="text-secondary-600 text-xl font-semibold mb-2">
          No results found
        </div>
        <p className="text-secondary-400">
          Try adjusting your search terms or filters
        </p>
      </div>
    );
  }

  // Stage 2: Loading cards with skeletons matching result count
  if (loadingCards) {
    return (
      <CarGrid>
        {Array.from({ length: resultCount }).map((_, index) => (
          <CarCardSkeleton key={index} />
        ))}
      </CarGrid>
    );
  }

  // Stage 3: Show actual results
  return (
    <CarGrid>
      {results.map((result) => (
        <CarCard key={result.id} car={result} className="cursor-pointer" />
      ))}
    </CarGrid>
  );
}
