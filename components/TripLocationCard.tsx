"use client";

// import clsx from "clsx";
import { cn } from "@/lib/utils";
import CommandBox from "@/components/CommandBox";
import TimePicker from "@/components/TimePicker";
import PopoverWrapper from "@/components/PopoverWrapper";
import { egyptianCities } from "@/data/database";
import CalendarPicker from "@/components/CalendarPicker";
import { DeliveryInfoBaseType, DeliveryInfoType } from "@/types";
import DotHeading from "@/components/DotHeading";

type TripLocationCardProps = {
  className?: string;
  setDeliveryInfo: (val: Partial<DeliveryInfoBaseType>) => void;
  deliveryInfo: DeliveryInfoType;
  variant?: "RentalForm" | "default";
};
const variantStyles: Record<string, Record<string, string>> = {
  default: {
    inputFields: "grid grid-cols-3 divide-x divide-secondary-300 items-center",
    inputLabel: "flex flex-col px-4",
    label: "text-secondary-500 font-bold",
    popoverButton: "",
  },
  RentalForm: {
    inputFields: "grid grid-cols-2 divide-x-0 gap-8",
    inputLabel: "flex flex-col gap-4 p-0",
    label: "text-secondary-500 font-semibold",
    popoverButton:
      "!py-4 !pl-8 !pr-6 focus:outline-primary-500 bg-default-background rounded-md placeholder:font-medium text-sm font-medium hover:bg-default-background h-fit",
  },
};

const variantTypes = {
  pickup: {
    heading: "Pick - Up",
  },
  dropoff: {
    heading: "Drop - Off",
  },
};

function TripLocationCard({
  className,
  setDeliveryInfo,
  deliveryInfo,
  variant = "default",
}: Readonly<TripLocationCardProps>) {
  const tripAttributes = [
    { name: "Location", type: "city" },
    { name: "Date", type: "date" },
    { name: "Time", type: "time" },
  ];

  const { type, city, date, time } = deliveryInfo;
  const typeVariant = variantTypes[type];
  const styles = variantStyles[variant];

  return (
    <div
      className={cn("px-8 py-6 rounded-[10px] shadow-sm bg-white", className)}
    >
      <DotHeading variant="rentForm">{typeVariant.heading}</DotHeading>

      <div className={styles.inputFields}>
        {tripAttributes.map((attribute) => (
          <div key={attribute.name} className={styles.inputLabel}>
            <h4 className={styles.label}>{attribute.name}</h4>
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
                buttonClassName={styles.popoverButton}
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
