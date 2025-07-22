"use client";

import { cn } from "@/lib/utils";
import { egyptianCities } from "@/data/database";
import { DeliveryInfoBaseType, DeliveryInfoType } from "@/types";

import DotHeading from "@/components/DotHeading";
import PopoverWrapper from "@/components/PopoverWrapper";
import SelectTrigger from "@/components/SelectTrigger";
import CommandBox from "@/components/CommandBox";
import CalendarPicker from "@/components/CalendarPicker";
import TimePicker from "@/components/TimePicker";

type TripLocationCardProps = {
  className?: string;
  setDeliveryInfo: (val: Partial<DeliveryInfoBaseType>) => void;
  deliveryInfo: DeliveryInfoType;
  variant?: "RentalForm" | "default";
};

const variantStyles = {
  default: {
    inputFields:
      "grid grid-cols-3 divide-x divide-secondary-300 items-center @max-md:grid-cols-1 @max-md:divide-x-0",
    inputLabel: "flex flex-col px-4",
    label: "text-secondary-500 font-bold",
    popoverButton: "",
  },
  RentalForm: {
    inputFields: "grid grid-cols-2 divide-x-0 gap-8 @max-md:grid-cols-1",
    inputLabel: "flex flex-col gap-4 p-0",
    label: "text-secondary-500 font-semibold",
    popoverButton:
      "!py-4 !pl-8 !pr-6 focus:outline-primary-500 bg-default-background rounded-md placeholder:font-medium text-sm font-medium hover:bg-default-background h-fit",
  },
} as const;

const variantTypes = {
  pickup: { heading: "Pick - Up" },
  dropoff: { heading: "Drop - Off" },
} as const;

const tripAttributes = [
  { name: "Location", type: "city" },
  { name: "Date", type: "date" },
  { name: "Time", type: "time" },
] as const;

function TripLocationCard({
  className,
  setDeliveryInfo,
  deliveryInfo,
  variant = "default",
}: Readonly<TripLocationCardProps>) {
  const { type, city, date, time } = deliveryInfo;
  const styles = variantStyles[variant];
  const heading = variantTypes[type].heading;

  const getValue = (type: string) => {
    switch (type) {
      case "city":
        return city || "";
      case "date":
        return date?.toDateString() || "";
      case "time":
        return time || "";
      default:
        return "";
    }
  };

  const renderContent = (
    type: string,
    setOpen: (open: boolean) => void
  ): React.ReactNode => {
    switch (type) {
      case "city":
        return (
          <CommandBox
            list={egyptianCities}
            listItemName="city"
            city={city}
            setCity={(newCity) => {
              setDeliveryInfo({ city: newCity });
              setOpen(false);
            }}
          />
        );
      case "date":
        return (
          <CalendarPicker
            selectedDate={date}
            onSelect={(newDate) => {
              setDeliveryInfo({ date: newDate });
              setOpen(false);
            }}
          />
        );
      case "time":
        return (
          <TimePicker
            selectedTime={time}
            onSelect={(newTime) => {
              setDeliveryInfo({ time: newTime });
              setOpen(false);
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "px-8 py-6 rounded-[10px] shadow-sm bg-white @container/trip-location-card",
        className
      )}
    >
      <DotHeading variant="rentForm">{heading}</DotHeading>

      <div className={styles.inputFields}>
        {tripAttributes.map(({ name, type }) => (
          <div key={name} className={styles.inputLabel}>
            <h4 className={styles.label}>{name}</h4>
            <div className="grid overflow-hidden">
              <PopoverWrapper
                trigger={({ open }) => (
                  <SelectTrigger
                    value={getValue(type)}
                    placeholder={`Select your ${type}`}
                    open={open}
                    buttonClassName={cn(
                      "text-xs text-secondary-300 px-3 py-2 cursor-pointer w-full border-0 hover:bg-transparent",
                      styles.popoverButton
                    )}
                  />
                )}
              >
                {({ setOpen }) => renderContent(type, setOpen)}
              </PopoverWrapper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripLocationCard;
