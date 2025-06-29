"use client";

import { ArrowUpDown } from "lucide-react";
import TripLocationCard from "@/components/TripLocationCard";
import { useState, memo } from "react";
import { DeliveryInfoType } from "@/types";
import { cn } from "@/lib/utils";

 function PickupDropoffSelector({className, switchClassName}: Readonly<{className?: string, switchClassName?: string}>) {
  function isInfoDifferent(
    a: DeliveryInfoType<"pickup">,
    b: DeliveryInfoType<"dropoff">
  ) {
    const { type: _, ...restA } = a;
    const { type: __, ...restB } = b;
    
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
    <div className={cn("flex gap-11 items-center", className)}>
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
          "w-15 aspect-square bg-primary-500 flex items-center justify-center rounded-[10px] cursor-pointer",
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
