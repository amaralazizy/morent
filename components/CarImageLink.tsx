"use client";
import { Car } from "@/types/database";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function CarImageLink({ car, className }: { car: Car; className?: string }) {
    const router = useRouter();
    return (
      <div
        className={cn("relative px-9 mb-16 cursor-pointer", className)}
        onClick={() => router.push(`/car/${car.id}`)}
      >
        <Image
          src="/car1.png"
          // src={car.image}
          alt="Car"
          width={250}
          height={170}
          className="rounded-[10px] object-cover mx-auto"
        />
        <div className="bg-gradient-to-b from-transparent to-white h-full w-full absolute top-1/3 left-0 overflow-hidden"></div>
      </div>
    );
}