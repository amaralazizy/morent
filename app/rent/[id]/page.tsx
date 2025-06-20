"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Car } from "@/types/database";
import { cars } from "@/data/database";

export default function RentPage() {
  const { id } = useParams();
  const [car, setCar] = useState<Car | undefined>(undefined);

  useEffect(() => {
    setCar(cars.find((car) => car.id === id));
  }, [id]);
  return (
    <div className="p-global grid grid-cols-3 bg-default-background h-full p-8">
      <div className="col-span-2"></div>
      <div className="col-span-1 p-6 bg-white rounded-lg">
        <h2 className="text-xl font-bold ">Rental Summary</h2>
        <p className="text-sm text-secondary-300">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>
    </div>
  );
}
