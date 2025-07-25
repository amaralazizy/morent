// "use client";
import { CarType } from "@/types/database";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CarImageLink({ car, className }: { car: CarType; className?: string }) {
    // const router = useRouter();
    return (
      <Link
        className={cn("relative px-9 mb-16 cursor-pointer", className)}
        href={`/car/${car.id}`}
      >
        <Image
          src={car?.car_images[0]?.image_url}
          // src={car.image}
          alt="Car"
          width={250}
          height={170}
          className="rounded-[10px] object-cover mx-auto"
        />
        <div className="bg-gradient-to-b from-transparent to-white h-full w-full absolute top-1/3 left-0 overflow-hidden"></div>
      </Link>
    );
}