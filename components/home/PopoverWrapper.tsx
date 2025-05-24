"use client";
import { useState, Children, cloneElement, isValidElement } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface PopoverWrapperProps {
  className?: string;
  value: string | null | undefined;
  placeholder: string;
  children: React.ReactNode;
}

export default function PopoverWrapper({
  className,
  value,
  placeholder,
  children,
}: Readonly<PopoverWrapperProps>) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={cn("w-full", className)} asChild>
        <Button
          className="has-[>svg]:p-0 overflow-hidden flex justify-between"
          variant="outline"
          role="combobox"
          aria-expanded={open}
        >
          <span className="truncate">{value ? value : placeholder}</span>
          <ChevronDown className="h-[14px] aspect-square text-black" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-2">
        {Children.map(children, (child) =>
          isValidElement(child)
            ? cloneElement(
                child as React.ReactElement<{
                  setOpen: (open: boolean) => void;
                }>,
                { setOpen }
              )
            : child
        )}
      </PopoverContent>
    </Popover>
  );
}
