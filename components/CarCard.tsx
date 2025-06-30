// "use client";

// import Image from "next/image";
import Like from "@/components/Like";
import { Fuel, LifeBuoy, Users } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Car } from "@/types/database";
// import RentalButton from "@/components/ClientButton";
import CarImageLink from "@/components/CarImageLink";
import Link from "next/link";
export interface CarCardProps {
  car: Car;
  className?: string;
}

export default function CarCard({ car, className }: CarCardProps) {
  // const router = useRouter();
  return (
    <div
      className={cn(
        "p-6 bg-white rounded-[10px] @container flex flex-col",
        className
      )}
    >
      <div className="flex justify-between mb-16 @max-md:mb-8">
        <div className="grid gap-1">
          <h4 className="text-xl font-medium">{car.name}</h4>
          <p className="text-sm text-gray-500">{car.type}</p>
        </div>
        <Like />
      </div>
      <div className="@md:flex @md:justify-evenly">
        <CarImageLink car={car} className="" />
        <div className="flex text-sm text-secondary-300 justify-around mb-8 @max-xs:flex-wrap @max-xs:gap-2 @md:flex-col">
          <div className="flex items-center gap-1.5">
            <Fuel />
            <div className="text-sm font-medium">{car.fuelTank}L</div>
          </div>
          <div className="flex items-center gap-1.5">
            <LifeBuoy />
            <div className="text-sm font-medium">{car.transmission}</div>
          </div>
          <div className="flex items-center gap-1.5">
            <Users />
            <div className="text-sm font-medium">{car.capacity} People</div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-between @max-xs:flex-col flex-1">
        <div>
          <p>
            <span className="text-xl font-bold text-secondary-500">
              ${(car.price - car.discount).toFixed(2)}/
            </span>
            <span className="text-sm text-secondary-300"> day</span>
          </p>
          {!!car.discount && (
            <span className="text-sm text-secondary-300 line-through">
              {car.price.toFixed(2)}
            </span>
          )}
        </div>
        <Link
          className="py-2.5 px-5 rounded-[4px] bg-primary-500 text-white cursor-pointer hover:bg-primary-500 origin-bottom hover:scale-105 transition-all duration-300 hover:shadow-md text-center"
          href={`/car/${car.id}/rent`}
        >
          Rent Now
        </Link>
      </div>
    </div>
  );
}
