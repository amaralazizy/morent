"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ClientButton from "@/components/ClientButton";
import SideNavBar from "@/components/SideNavBar";

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ClientButton
        className="cursor-pointer p-0 bg-transparent hover:bg-transparent"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Menu className="text-primary-500 scale-140" />
      </ClientButton>
      <SideNavBar
        className={cn("transition-all duration-500 ease-in-out", open ? "translate-x-0" : "-translate-x-full")}
        setOpen={setOpen}
      />
    </>
  );
}
