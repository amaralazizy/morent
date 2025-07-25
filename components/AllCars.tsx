import CarGrid from "@/components/CarGrid";
import { Suspense } from "react";
import CarCard from "@/components/CarCard";
import { CarType } from "@/types/database";
import MoreCars from "@/components/MoreCars";
import { getCars } from "@/data/api";

export default async function AllCars() {
  const { cars: initialCars } = await getCars(6, 0);

  return (
    <CarGrid>
      {initialCars.map((car: CarType) => (
        <Suspense key={car.id} fallback={<div>Loading...</div>}>
          <CarCard car={car} />
        </Suspense>
      ))}
      <MoreCars initialCars={initialCars} />
    </CarGrid>
  );
}
