import Image from "next/image";
import { carDetails } from "@/data/database";
import { cn } from "@/lib/utils";
import { cars } from "@/data/database";
import RatingStarIcons from "@/components/StarIcons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const { imgClass, bg } = carDetails.exterior;

export default function CarRentCard({
  className,
  id,
}: Readonly<{
  className?: string;
  id: string;
}>) {
  const car = cars.find((car) => car.id === id);
  return (
    <div
      className={cn(
        "p-6 bg-white rounded-lg self-start flex flex-col gap-8 @container",
        className
      )}
    >
      <div>
        <h2 className="text-xl font-bold ">Rental Summary</h2>
        <p className="text-sm text-secondary-300">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>
      <div className="flex gap-4 @max-xs:flex-col">
        <div
          className={`w-37 h-31 rounded-lg relative isolate ${bg} @max-xs:w-full`}
        >
          <Image src="/car2.png" alt="car" fill className={imgClass} />
        </div>
        <div className="flex flex-col containerjustify-center gap-2">
          <h2 className="text-[2rem] font-bold">{car?.name}</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <RatingStarIcons active={car?.rating || 0} />
            </div>
            <p className="text-sm text-secondary-400 truncate">
              {car?.reviews && car.reviews.length > 999
                ? "999+"
                : car?.reviews
                ? car.reviews.length
                : 0}{" "}
              reviews
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${car?.price}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>$0</span>
        </div>
      </div>
      <div className="[>has:input:focus-visible]:border [>has:input:focus-visible]:border-primary-500 flex overflow-hidden @max-xs:flex-col @xs:h-14">
        <Input
          type="text"
          placeholder="Apply promo code"
          className="input_primary !@xs:rounded-r-none !h-full !@max-xs:rounded-b-none"
        />
        <Button className="bg-primary-500 text-white hover:bg-primary-600 shadow-none border-none font-semibold text-base h-full @xs:rounded-l-none @max-xs:rounded-t-none">
          Apply now
        </Button>
      </div>
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl font-bold mb-1">Total Rental Price</h4>
          <p className="text-sm text-secondary-300">
            Overall price and includes rental discount
          </p>
        </div>
        <span className="text-[2rem] font-bold">${car?.price}</span>
      </div>
    </div>
  );
}
