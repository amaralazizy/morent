"use client";
import Dot from "@/app/ui/dot";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import CommandBox from "./commandBox";
import TimePicker from "@/components/home/timePicker";
import PopoverWrapper from "@/components/home/PopoverWrapper";
import { useEffect, useState } from "react";
import { getCities } from "@/data/api";
import CalendarPicker from "./calendarPicker";
import { DeliveryInfoBaseType, DeliveryInfoType } from "@/types";


type TripLocationCardProps = {
  className?: string;
  setDeliveryInfo: (val: Partial<DeliveryInfoBaseType>) => void;
  deliveryInfo: DeliveryInfoType;
};

export default function TripLocationCard({
  className,
  setDeliveryInfo,
  deliveryInfo,

}: Readonly<TripLocationCardProps>) {
  const tripAttributes = [
    { name: "Location", type: "city" },
    { name: "Date", type: "date" },
    { name: "Time", type: "time" },
  ];
  const [cities, setCities] = useState<{ name: string; id: string }[]>([]);
  const { type, city, date, time } = deliveryInfo;

  useEffect(() => {
    getCities().then((data) => setCities(data));
  }, []);
  return (
    <div
      className={cn("px-12 py-6 rounded-[10px] shadow-sm bg-white", className)}
    >
      <div className="flex items-center py-0.5 gap-2 mb-4">
        <Dot />
        <h3 className="font-semibold">
          {clsx(
            type === "pickup" && "Pick - Up",
            type === "dropoff" && "Drop - Off"
          )}
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-6 pr-12 w-full">
        {tripAttributes.map((attribute, index) => (
          <div key={attribute.name} className="flex justify-between">
            <div className="w-full">
              <h4 className="text-secondary-500 font-bold">{attribute.name}</h4>
              <PopoverWrapper
                value={
                  attribute.type === "city"
                    ? city
                    : attribute.type === "date"
                    ? date?.toDateString()
                    : time
                }
                placeholder={`Search your ${attribute.name}`}
                className="flex justify-between text-xs text-secondary-300 border-none shadow-none hover:bg-transparent cursor-pointer truncate w-full"
              >
                {attribute.type === "city" && (
                  <CommandBox
                    list={cities}
                    listItemName={attribute.type}
                    setCity={(newCity) => setDeliveryInfo({ city: newCity })}
                    city={city}
                  />
                )}
                {attribute.type === "date" && (
                  <CalendarPicker
                    selectedDate={date}
                    onSelect={(newDate) => setDeliveryInfo({ date: newDate })}
                  />
                )}
                {attribute.type === "time" && (
                  <TimePicker selectedTime={time} onSelect={(newTime) => setDeliveryInfo({ time: newTime })} />
                )}
              </PopoverWrapper>
            </div>
            {index !== tripAttributes.length - 1 && (
              <Separator
                orientation="vertical"
                className="text-secondary-300"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
