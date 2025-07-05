// "use client";
import { cn } from "@/lib/utils";
import { cars } from "@/data/database";
import Like from "@/components/Like";
import RatingStarIcons from "@/components/StarIcons";
import Link from "next/link";

export default function CarDescription({
  className,
  id,
}: Readonly<{ className?: string; id: string }>) {
  const car = cars.find((car) => car.id === id) || cars[0];

  return (
    <div
      className={cn(
        "p-6 flex flex-col justify-between bg-white rounded-lg gap-8",
        className
      )}
    >
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <div>
            <h2 className="text-[2rem] font-bold mb-2">{car.name}</h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <RatingStarIcons active={car.rating || 0} />
              </div>
              <p className="text-sm text-secondary-400">
                {car.reviews && car.reviews.length > 999
                  ? "999+"
                  : car.reviews
                  ? car.reviews.length
                  : 0}{" "}
                reviews
              </p>
            </div>
          </div>
          <Like className="scale-120" />
        </div>
        <p className="text-xl text-secondary-400">{car.description}</p>
        <div className="flex gap-8 flex-wrap text-xl">
          <span className="flex gap-8">
            <span className="text-secondary-300">Type Car</span>
            <span className="font-semibold text-secondary-400">{car.type}</span>
          </span>
          <span className="flex gap-8">
            <span className="text-secondary-300">Capacity</span>
            <span className="font-semibold text-secondary-400">
              {car.capacity}
            </span>
          </span>
          <span className="flex gap-8">
            <span className="text-secondary-300">Steering</span>
            <span className="font-semibold text-secondary-400">
              {car.transmission}
            </span>
          </span>
          <span className="flex gap-8">
            <span className="text-secondary-300">Gasoline</span>
            <span className="font-semibold text-secondary-400">
              {car.fuelTank}
            </span>
          </span>
        </div>
      </div>
      {/* TODO: Seperate this into individual component and use it  here and CarCard */}
      <div className="flex gap-6 justify-between items-center">
        <div>
          <p>
            <span className="text-3xl font-bold text-secondary-500">
              ${(car.price - car.discount).toFixed(2)}/
            </span>
            <span className="text-secondary-300"> day</span>
          </p>
          {!!car.discount && (
            <span className="text-secondary-300 line-through">
              {car.price.toFixed(2)}
            </span>
          )}
        </div>
        <Link
          href={`/car/${car.id}/rent`}
          className="py-2.5 px-5 rounded-[4px] bg-primary-500 text-white cursor-pointer hover:bg-primary-500 origin-bottom hover:scale-105 transition-all duration-300 hover:shadow-md text-center "
        >
          Rent Now
        </Link>
      </div>
    </div>
  );
}
