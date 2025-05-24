"use client";
import Dot from "@/app/ui/dot";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import CommandBox from "./commandBox";
import TimePicker from "@/components/home/timePicker";
import PopoverWrapper from "@/components/home/PopoverWrapper";
// import { useEffect, useState } from "react";
// import { getCities } from "@/data/api";
import {egyptianCities} from "@/data/database"
import CalendarPicker from "./calendarPicker";
import { DeliveryInfoBaseType, DeliveryInfoType } from "@/types";
import { memo } from "react";

type TripLocationCardProps = {
  className?: string;
  setDeliveryInfo: (val: Partial<DeliveryInfoBaseType>) => void;
  deliveryInfo: DeliveryInfoType;
};

function TripLocationCard({
  className,
  setDeliveryInfo,
  deliveryInfo,
}: Readonly<TripLocationCardProps>) {
  const tripAttributes = [
    { name: "Location", type: "city" },
    { name: "Date", type: "date" },
    { name: "Time", type: "time" },
  ];
  // const [cities, setCities] = useState<{ id: string; name: string; }[]>(egyptianCities);
  const { type, city, date, time } = deliveryInfo;

  // useEffect(() => {
  //   getCities().then((data) => setCities(data));
  // }, []);

  return (
    <div
      className={cn("px-8 py-6 rounded-[10px] shadow-sm bg-white", className)}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Dot />
        <h3 className="font-semibold text-lg">
          {clsx(
            type === "pickup" && "Pick - Up",
            type === "dropoff" && "Drop - Off"
          )}
        </h3>
      </div>

      <div className="grid grid-cols-3 divide-x divide-secondary-300 items-center">
        {tripAttributes.map((attribute) => (
          <div key={attribute.name} className="flex flex-col px-4">
            <h4 className="text-secondary-500 font-bold">{attribute.name}</h4>
            <div className="grid overflow-hidden">
              <PopoverWrapper
                value={
                  attribute.type === "city"
                    ? city
                    : attribute.type === "date"
                    ? date?.toDateString()
                    : time
                }
                placeholder={`Select your ${attribute.type.toLowerCase()}`}
                className="text-xs text-secondary-300 px-3 py-2 cursor-pointer w-full border-0 hover:bg-transparent"
              >
                {attribute.type === "city" && (
                  <CommandBox
                    list={egyptianCities}
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
                  <TimePicker
                    selectedTime={time}
                    onSelect={(newTime) => setDeliveryInfo({ time: newTime })}
                  />
                )}
              </PopoverWrapper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripLocationCard;