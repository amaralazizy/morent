// import { useParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import { Car } from "@/types/database";
// import { cars } from "@/data/database";
import CarRentCard from "@/components/CarRentCard";
import RentForm from "@/components/RentForm";

type RentPageProps = {
  params: Promise<{ id: string }>;
};

export default async function RentPage({ params }: RentPageProps) {
  const { id } = await params;
  // const [car, setCar] = useState<Car | undefined>(undefined);
  // const car: Car | undefined = cars.find((car) => car.id === id);

  // useEffect(() => {
  //   setCar(cars.find((car) => car.id === id));
  // }, [id]);
  return (
    <div className="p-(--padding-global) grid grid-cols-1 xl:grid-cols-3 bg-default-background h-full gap-8 px-[10%]">
      <RentForm className="order-2 xl:order-1 xl:col-span-2 flex flex-col gap-8" />
      <CarRentCard className="order-1 xl:order-2 xl:col-span-1" id={id} />
    </div>
  );
}
