import TripLocationCard from "@/components/TripLocationCard";
import { DeliveryInfoType } from "@/types";

type LocationSelectorProps<T extends "pickup" | "dropoff"> = {
  type: T;
  deliveryInfo: DeliveryInfoType<T>;
  setDeliveryInfo: (val: Partial<DeliveryInfoType<T>>) => void;
  className?: string;
};

export default function LocationSelector<T extends "pickup" | "dropoff">({
  type,
  deliveryInfo,
  setDeliveryInfo,
  className,
}: LocationSelectorProps<T>) {
  return (
    <TripLocationCard
      className={className}
      setDeliveryInfo={(val) =>
        setDeliveryInfo({
          ...val,
          type,
        })
      }
      deliveryInfo={deliveryInfo}
    />
  );
}
