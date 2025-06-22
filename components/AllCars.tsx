"use client";
import CarGrid from "@/components/CarGrid";
import CarCardSkeleton from "@/components/CarCardSkeleton";
import { cars } from "@/data/database";
import { Suspense, useEffect } from "react";
import CarCard from "@/components/CarCard";

type AllCarsProps = {
  carsToBeShown?: number;
};

export default function AllCars({ carsToBeShown }: AllCarsProps) {
  // TODO: make infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight;
      if (nearBottom) {
        console.log("Reached the end of the page!");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <CarGrid>
      {cars.slice(0, carsToBeShown).map((car) => (
        <Suspense key={car.id} fallback={<CarCardSkeleton />}>
          <CarCard car={car} />
        </Suspense>
      ))}
    </CarGrid>
  );
}
