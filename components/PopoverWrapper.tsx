"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface PopoverWrapperProps {
  trigger: (props: { open: boolean }) => React.ReactNode;
  children: (props: { setOpen: (open: boolean) => void }) => React.ReactNode;
  contentClassName?: string;
}

// TODO: REMOVE ALL OF THIS AND MAKE IT POPOVER CUSTOMIZED FOR THE FORM ONLY

export default function PopoverWrapper({
  trigger,
  children,
  contentClassName,
}: Readonly<PopoverWrapperProps>) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {/* Remove className from here since it should be on the actual trigger */}
        {trigger({ open })}
      </PopoverTrigger>
      <PopoverContent className={cn("w-full p-0", contentClassName)}>
        {children({ setOpen })}
      </PopoverContent>
    </Popover>
  );
}
