import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Heart } from "lucide-react"

const Favourites = ["Favourite 1", "Favourite 2", "Favourite 3"];

export default function FavouritesPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="border-1 border-secondary-200/40 rounded-full cursor-pointer max-lg:hidden bg-transparent hover:bg-transparent py-5"
        >
          <Heart
            className="w-5 h-[18px] text-secondary-400 scale-120"
            fill="#596780"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <div className="flex flex-col gap-4">
          {Favourites.map((favourite) => (
            <div key={favourite} className="flex items-center gap-2">
              <Heart className="w-5 h-[18px] text-secondary-400 scale-120" />
              <p>{favourite}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

