import { Button } from "@/components/ui/button";
import { User, Car, Star, Book } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";

// type SettignsIconTypes = [
//     { Account: React.ReactNode },
//     { Rentals: React.ReactNode },
//     { Reviews: React.ReactNode },
//     { Bookings: React.ReactNode },
// ]

const SettingsIcons = {
  Account: (
    <User key="user" className="w-5 h-[18px] text-secondary-400 scale-120" />
  ),
  Rentals: (
    <Car key="car" className="w-5 h-[18px] text-secondary-400 scale-120" />
  ),
  Reviews: (
    <Star key="star" className="w-5 h-[18px] text-secondary-400 scale-120" />
  ),
  Bookings: (
    <Book key="book" className="w-5 h-[18px] text-secondary-400 scale-120" />
  ),
};

export default function SettingsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="border-1 border-secondary-200/40 rounded-full cursor-pointer max-lg:hidden bg-transparent hover:bg-transparent py-5">
          <Settings className="w-5 h-[18px] text-secondary-400 scale-120" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <div className="flex flex-col gap-4">
          {Object.entries(SettingsIcons).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              {value}
              <p>{key}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
