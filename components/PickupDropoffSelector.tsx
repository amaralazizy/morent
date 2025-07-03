"use client";

import { ArrowUpDown } from "lucide-react";
import TripLocationCard from "@/components/TripLocationCard";
import { useState, memo } from "react";
import { DeliveryInfoType } from "@/types";
import { cn } from "@/lib/utils";
// import { Button } from "./ui/button";

 function PickupDropoffSelector({className, switchClassName}: Readonly<{className?: string, switchClassName?: string}>) {
  function isInfoDifferent(
    a: DeliveryInfoType<"pickup">,
    b: DeliveryInfoType<"dropoff">
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type: _a, ...restA } = a;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type: _b, ...restB } = b;
    
    return JSON.stringify(restA) !== JSON.stringify(restB);
  }


  const handleSwitch = () => {
    if (!isInfoDifferent(pickup, dropoff)) return;
    setPickup(() => ({ ...dropoff, type: "pickup" }));
    setDropoff(() => ({ ...pickup, type: "dropoff" }));
  };

  const [pickup, setPickup] = useState<DeliveryInfoType<"pickup">>({
    type: "pickup",
    city: null,
    date: new Date(),
    time: null,
  });


  const [dropoff, setDropoff] = useState<DeliveryInfoType<"dropoff">>({
    type: "dropoff",
    city: null,
    date: new Date(),
    time: null,
  });


  

  return (
    <div className={cn("flex gap-11 items-center max-[1220px]:grid max-[1220px]:gap-8", className)}>
      <TripLocationCard
        className="flex-1"
        setDeliveryInfo={(val) =>
          setPickup((prev) => ({
            ...prev,
            ...val,
            type: "pickup",
          }))
        }
        deliveryInfo={pickup}
      />
      <button
        className={cn(
          "z-2 w-15 aspect-square bg-primary-500 flex items-center justify-center rounded-[10px] cursor-pointer max-[1220px]:-my-4 max-[1220px]:shadow-2xl/50 max-[1220px]:shadow-primary-500 max-[1220px]:mx-auto",
          switchClassName
        )}
        onClick={handleSwitch}
      >
        <ArrowUpDown className="text-white w-5 aspect-square" />
      </button>
      <TripLocationCard
        className="flex-1"
        setDeliveryInfo={(val) =>
          setDropoff((prev) => ({
            ...prev,
            ...val,
            type: "dropoff",
          }))
        }
        deliveryInfo={dropoff}
      />
    </div>
  );
}

export default memo(PickupDropoffSelector);
