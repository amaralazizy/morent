// "use client";
// import { Button } from "@/components/ui/button";npm i scrolltrigger
// import { cars } from "@/data/database";
// import { useState } from "react";
import AllCars from "@/components/AllCars";
import { cn } from "@/lib/utils";

type PopularCarsProps = {
  className?: string;
  title?: "Popular" | "Recent";
  // showAll?: boolean;
};

export default function PopularCars({
  className,
  title = "Popular",
  // showAll = false,
}: Readonly<PopularCarsProps>) {
  // const [carsToBeShown, setCarsToBeShown] = useState(9);
  // function handleShowMore() {
  //   setCarsToBeShown((prevCarsToBeShown) => {
  //     if (prevCarsToBeShown + 9 > cars.length) {
  //       return cars.length;
  //     }
  //     return prevCarsToBeShown + 9;
  //   });
  // }

  return (
    <div className={cn("", className)}>
      <div className="flex items-center justify-between w-full px-5 py-2.5">
        <h2 className="font-semibold text-secondary-300">{title} Cars</h2>
        <a href="/cars" className="text-primary-500 font-semibold">
          View All
        </a>
      </div>
      <AllCars/>
      <div className="flex items-center justify-center mb-16 relative max-[400px]:justify-between">
        {/* {cars.length > carsToBeShown && (
          <Button
            className="text-white px-5 py-2.5 rounded bg-primary-500 hover:bg-primary-500 cursor-pointer "
            onClick={() => handleShowMore()}
          >
            Show more cars
          </Button>
        )} */}
        {/* {cars.length - carsToBeShown !== 0 && (
          <span className="font-medium text-sm text-secondary-300 absolute right-0 max-[400px]:static">
            {cars.length - carsToBeShown} Car
            {cars.length - carsToBeShown > 1 ? "s" : ""}
          </span>
        )} */}
      </div>
    </div>
  );
}
