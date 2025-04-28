export type PlaceType = "pickup" | "dropoff";

export interface DeliveryInfoBaseType {
  city: string | null;
  date: Date;
  time: string | null;
}

export interface DeliveryInfoType<T extends PlaceType = PlaceType>
  extends DeliveryInfoBaseType {
  type: T;
}
