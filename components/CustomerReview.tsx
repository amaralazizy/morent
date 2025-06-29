// import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RatingStarIcons from "@/components/StarIcons";
export default function CustomerReview() {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Alex Stanton</h3>
            <h4 className="text-sm text-secondary-300">CEO at Bukalapak</h4>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <p className="text-sm text-secondary-300">21 July 2022</p>
            <RatingStarIcons active={4} />
          </div>
        </div>
        <p className="text-sm text-secondary-400">
          We are very happy with the service from the MORENT App. Morent has a
          low price and also a large variety of cars with good and comfortable
          facilities. In addition, the service provided by the officers is also
          very friendly and very polite.
        </p>
      </div>
    </div>
  );
}
