"use client";

import { ArrowUpDown } from "lucide-react";
import TripLocationCard from "./TripLocationCard";
import { useState } from "react";
import { DeliveryInfoType } from "@/types";

export default function PickupDropoffSelector() {
  const handleSwitch = () => {
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
    <div className="flex gap-11 items-center">
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
        className="w-15 aspect-square bg-primary-500 flex items-center justify-center rounded-[10px] cursor-pointer"
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
