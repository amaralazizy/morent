"use client";
import { Button } from "@/components/ui/button";
import CarCard from "./carCard";
import { popularCars } from "@/data/database";
import { useState, Suspense } from "react";
// import { Skeleton } from "@/components/ui/skeleton";
// import dynamic from "next/dynamic";
import CarCardSkeleton from "@/components/ui/carCardSkeleton";
// const CarCard = dynamic(
//   () =>
//     new Promise<typeof import("./carCard")["default"]>((resolve) =>
//       setTimeout(() => {
//         import("./carCard").then((mod) => resolve(mod.default));
//       }, 15000)
//     )
// );

export default function PopularCars() {
  const [carsToBeShown, setCarsToBeShown] = useState(9);
  function handleShowMore() {
    setCarsToBeShown((prevCarsToBeShown) => {
      if (prevCarsToBeShown + 9 > popularCars.length) {
        return popularCars.length;
      }
      return prevCarsToBeShown + 9;
    });
  }

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between w-full px-5 py-2.5">
        <h2 className="font-semibold text-secondary-300">Popular Cars</h2>
        <a href="/cars" className="text-primary-500 font-semibold">
          View All
        </a>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(317px,1fr))] gap-4 mt-4 mb-16">
        {popularCars.slice(0, carsToBeShown).map((car) => (
          <Suspense key={car.id} fallback={<CarCardSkeleton />}>
            <CarCard car={car} className="cursor-pointer" />
          </Suspense>
        ))}
      </div>
      <div className="flex items-center justify-center mb-16 relative">
        {popularCars.length > carsToBeShown && (
          <Button
            className="text-white px-5 py-2.5 rounded bg-primary-500 hover:bg-primary-500 cursor-pointer "
            onClick={() => handleShowMore()}
          >
            Show more cars
          </Button>
        )}
        {popularCars.length - carsToBeShown !== 0 && (
          <span className="font-medium text-sm text-secondary-300 absolute right-0">
            {popularCars.length - carsToBeShown} Car
            {popularCars.length - carsToBeShown > 1 ? "s" : ""}
          </span>
        )}
      </div>
    </div>
  );
}
