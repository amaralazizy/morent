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
  buttonClassName?: string;
}

export default function PopoverWrapper({
  className,
  value,
  placeholder,
  children,
  buttonClassName,
}: Readonly<PopoverWrapperProps>) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={cn("w-full", className)} asChild>
        <Button
          className={cn("has-[>svg]:p-0 overflow-hidden flex justify-between", buttonClassName)}
          variant="outline"
          role="combobox"
          aria-expanded={open}
        >
          <span className={`truncate ${value ? "text-black" : "text-secondary-300"}`}>{value ? value : placeholder}</span>
          <ChevronDown className="h-[14px] aspect-square text-black"/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
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
