"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function RentalButton({ buttonColor, route, buttonText, className }: { buttonColor: string, route: string, buttonText: string, className?: string }) {
  const router = useRouter();
  return (
    <Button
      className={cn(`py-2.5 px-5 rounded-[4px] ${buttonColor} text-white cursor-pointer hover:${buttonColor} origin-bottom hover:scale-105 transition-all duration-300 hover:shadow-md $`,className)}
      onClick={() => router.push(route)}
    >
      {buttonText}
    </Button>
  );
}
