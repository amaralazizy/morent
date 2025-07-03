import { cn } from "@/lib/utils";
import Link from "next/link";
import { X } from "lucide-react";
import Overlay from "./Overlay";

const buttons = ["Favourites", "Notifications", "Settings"];

export default function SideNavBar({
  className,
  setOpen,
  open,
}: Readonly<{ className?: string; setOpen: (open: boolean) => void; open: boolean }>) {
  return (
    <>
      <div
        className={cn(
          "fixed w-64 p-4 left-0 top-0 min-w-[min(100%,250px)] h-full bg-white z-50 transition-all duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        <X
          className="text-primary-500 float-end cursor-pointer"
          onClick={() => setOpen(false)}
        />
        <ul className="grid gap-4 w-full justify-items-center text-xl font-medium">
          {buttons.map((button) => (
            <li key={button} className="cursor-pointer">
              <Link href={button.toLowerCase()} className="text-secondary-500">
                {button}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {open && <Overlay className="z-40" />}
    </>
  );
}
