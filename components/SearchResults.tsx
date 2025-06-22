import { useSearch } from "@/contexts/SearchContext";
import { useEffect, useState } from "react";
import { cars } from "@/data/database";
import CarCard from "@/app/components/home/carCard";
import CarCardSkeleton from "@/components/CarCardSkeleton";
import CarGrid from "@/components/CarGrid";
import { Car } from "@/types/database";
import LocalLoading from "@/app/components/ui/localLoading";

export default function SearchResults() {
  const { search, selectedTypes, selectedCapacities, price } = useSearch();
  const [results, setResults] = useState<Car[]>([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingCards, setLoadingCards] = useState(false);
  const [resultCount, setResultCount] = useState(0);
  const [error, setError] = useState(false);

  const mockFetchResults = () => {
    try {
      // First, get the count of results
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

      // Set the count and show skeletons
      setResultCount(filteredResults.length);
      setInitialLoading(false);
      setLoadingCards(true);

      // Simulate loading individual card data with a delay
      setTimeout(() => {
        setResults(filteredResults);
        setLoadingCards(false);
      }, 800); // Simulate API delay for card data
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

    // Initial search delay
    const timeoutId = setTimeout(() => {
      mockFetchResults();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search, selectedTypes, selectedCapacities, price]);

  // Stage 1: Initial loading within search results area
  if (initialLoading) {
    return (
      <LocalLoading
        text="Searching for cars..."
        size="md"
        theme="primary"
        animationSpeed="normal"
      />
    );
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
