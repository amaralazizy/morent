"use client";

import Image from "next/image";
import Like from "@/app/ui/like";
import { Fuel, LifeBuoy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Car {
  id: number;
  name: string;
  type: string;
  capacity: number;
  fuelTank: number;
  transmission: string;
  price: number;
  discount?: number | null;
  image: string;
  // Add other car properties as needed
}

export interface CarCardProps {
  car: Car;
  className?: string;
}

export default function CarCard({ car, className}: CarCardProps) {

  return (
    <div className={cn("p-6 bg-white rounded-[10px]", className)} onClick={() => console.log(`Car ${car.id} has been clicked`)}>
      <div className="flex justify-between mb-16">
        <div className="grid gap-1">
          <h4 className="text-xl font-medium">{car.name}</h4>
          <p className="text-sm text-gray-500">{car.type}</p>
        </div>
        <Like />
      </div>
      <div className="relative px-9 mb-16">
        <Image
          src="/car1.png"
          // src={car.image}
          alt="Car"
          width={250}
          height={170}
          className="rounded-[10px] object-cover mx-auto"
        />
        <div className="bg-gradient-to-b from-transparent to-white h-full w-full absolute top-1/3 left-0 overflow-hidden"></div>
      </div>
      <div className="flex text-sm text-secondary-300 justify-around mb-8">
        <div className="flex justify-between items-center gap-1.5">
          <Fuel />
          <div className="text-sm font-medium">{car.fuelTank}L</div>
        </div>
        <div className="flex justify-between items-center gap-1.5">
          <LifeBuoy />
          <div className="text-sm font-medium">{car.transmission}</div>
        </div>
        <div className="flex justify-between items-center gap-1.5">
          <Users />
          <div className="text-sm font-medium">{car.capacity} People</div>
        </div>
      </div>
      <div className="flex gap-6 justify-between">
        <div>
          <p>
            <span className="text-xl font-bold text-secondary-500">
              ${car.discount ? car.discount.toFixed(2) : car.price.toFixed(2)}/
            </span>
            <span className="text-sm text-secondary-300"> day</span>
          </p>
          {car.discount && (
            <span className="text-sm text-secondary-300 line-through">{car.price.toFixed(2)}</span>
          )}
        </div>
        <Button className="text-white px-5 py-2.5 rounded bg-primary-500 hover:bg-primary-500 cursor-pointer">
          Rent Now
        </Button>
      </div>
    </div>
  );
}
