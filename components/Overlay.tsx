"use client";
import { cn } from "@/lib/utils";

interface OverlayProps {
  className?: string;
}

export default function Overlay({ className }: OverlayProps) {

  return (
    <div
      className={cn(
        "fixed inset-0 bg-black/50 backdrop-blur-sm duration-300",
        className
      )}
      aria-hidden="true"
    />
  );
}
