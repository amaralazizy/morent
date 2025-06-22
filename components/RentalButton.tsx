"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
export default function RentalButton({ buttonColor }: { buttonColor: string }) {
  const router = useRouter();
  return (
    <Button
      className={`mt-[30px] py-2.5 px-5 rounded-[4px] ${buttonColor} text-white cursor-pointer hover:${buttonColor} origin-bottom hover:scale-105 transition-all duration-300 hover:shadow-md`}
      onClick={() => router.push("/cars")}
    >
      Rental Car
    </Button>
  );
}
