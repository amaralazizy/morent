"use client";
import { useState } from "react";
import { DeliveryInfoType } from "@/types";
import TripLocationCard from "@/components/TripLocationCard";
export default function RentalPickDrop() {
  const [pickup, setPickup] = useState<DeliveryInfoType>({
    type: "pickup",
    city: null,
    date: new Date(),
    time: null,
  });
  const [dropoff, setDropoff] = useState<DeliveryInfoType>({
    type: "dropoff",
    city: null,
    date: new Date(),
    time: null,
  });
  return (
    <div className="grid gap-8">
      <TripLocationCard
        deliveryInfo={pickup}
        setDeliveryInfo={(val) =>
          setPickup((prev) => ({ ...prev, ...val, type: "pickup" }))
        }
        className="shadow-none p-0"
        variant="RentalForm"
      />
      <TripLocationCard
        deliveryInfo={dropoff}
        setDeliveryInfo={(val) =>
          setDropoff((prev) => ({ ...prev, ...val, type: "dropoff" }))
        }
        className="shadow-none p-0"
        variant="RentalForm"
      />
    </div>
  );
}
