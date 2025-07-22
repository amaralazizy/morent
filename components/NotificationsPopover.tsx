import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Notifications = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque vero sunt accusantium molestiae, suscipit odit voluptatibus ducimus explicabo",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque vero sunt accusantium molestiae, suscipit odit voluptatibus ducimus explicabo iure autem aliquid nemo dignissimos reiciendis eveniet dolorum dolor. Libero, enim voluptates iure autem aliquid nemo dignissimos reiciendis eveniet dolorum dolor. Libero, enim voluptates.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque vero sunt accusantium molestiae, suscipit odit voluptatibus ducimus explicabo iure autem aliquid nemo dignissimos reiciendis eveniet dolorum dolor. Libero, enim voluptates.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque vero sunt accusantium molestiae, suscipit odit voluptatibus ducimus explicabo iure autem aliquid nemo dignissimos reiciendis eveniet dolorum dolor. Libero, enim voluptates.",
];

export default function SettingsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="border-1 border-secondary-200/40 rounded-full cursor-pointer max-lg:hidden bg-transparent hover:bg-transparent py-5">
          <Bell
            className="w-5 h-[18px] text-secondary-400 scale-120"
            fill="#596780"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit max-w-80 overflow-y-scroll h-[250px]">
        <div className="flex flex-col gap-4 divide-y-1 ">
          {Notifications.map((notification) => (
            <div
              key={notification}
              className="flex items-center gap-2 hover:bg-default-background pb-2"
            >
              {notification}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
