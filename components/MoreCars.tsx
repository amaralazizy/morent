"use client";
import { useInView } from "react-intersection-observer";
import { getCars } from "@/data/api";
import { useEffect, useState, useCallback } from "react";
import { CarType } from "@/types/database";
import CarCard from "@/components/CarCard";
import CarCardSkeleton from "@/components/CarCardSkeleton";

type MoreCarsProps = {
  initialCars: CarType[];
};

export default function MoreCars({ initialCars }: MoreCarsProps) {
  const [cars, setCars] = useState<CarType[]>(initialCars);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(initialCars.length); // ✅ Start from initial length

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const loadMoreCars = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const { cars: newCars } = await getCars(6, offset);

      if (newCars.length === 0) {
        setHasMore(false);
      } else {
        setCars((prev) => [...prev, ...newCars]);
        setOffset((prev) => prev + newCars.length);
      }
    } catch (error) {
      console.error("Failed to load more cars:", error);
    } finally {
      setLoading(false);
    }
  }, [offset, loading, hasMore]);

  useEffect(() => {
    if (inView && hasMore && !loading) {
      loadMoreCars();
    }
  }, [inView, loadMoreCars, hasMore, loading]);

  return (
    <>
      {cars.slice(initialCars.length).map((car: CarType) => (
        <CarCard key={car.id} car={car} />
      ))}

      {loading && (
        <>
          {Array.from({ length: 3 }).map((_, i) => (
            <CarCardSkeleton key={`skeleton-${i}`} />
          ))}
        </>
      )}

      {hasMore && <div ref={ref} className="h-10" />}

      {!hasMore && cars.length > initialCars.length && (
        <div className="col-span-full text-center py-8 text-gray-500">
          No more cars to load
        </div>
      )}
    </>
  );
}