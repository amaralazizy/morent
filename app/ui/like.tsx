"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Toggle } from "@/app/components/ui/toggle";
import { cn } from "@/lib/utils";
export default function Like({ className }: { className?: string }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Toggle
      onClick={() => setIsLiked(!isLiked)} // Toggle the liked state
      className="data-[state=on]:bg-transparent hover:bg-black/5 cursor-pointer" // Change color dynamically
    >
      <Heart
        className={cn("w-4 h-4", className)}
        fill={isLiked ? "red" : "none"} // Fill red when liked
        stroke={isLiked ? "red" : "black"} // Change stroke color
      />
    </Toggle>
  );
}
