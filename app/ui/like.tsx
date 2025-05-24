"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export default function Like() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Toggle
      onClick={() => setIsLiked(!isLiked)} // Toggle the liked state
      className="data-[state=on]:bg-transparent" // Change color dynamically
    >
      <Heart
        className="w-4 h-4"
        fill={isLiked ? "red" : "none"} // Fill red when liked
        stroke={isLiked ? "red" : "black"} // Change stroke color
      />
    </Toggle>
  );
}
