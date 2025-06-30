"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type ClientButtonProps = React.ComponentProps<"button"> &
  PropsWithChildren & {
    className?: string;
  };

export default function ClientButton({
  children,
  className,
  ...props
}: ClientButtonProps) {
  // TODO: Make the rental buttons Link with href and keep this for onClick that not forward to a link
  return (
    <Button className={cn("", className)} {...props}>
      {children}
    </Button>
  );
}
