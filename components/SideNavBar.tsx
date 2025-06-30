import { cn } from "@/lib/utils";
import Link from "next/link";
import { X } from "lucide-react";

const buttons = ["Favourites", "Notifications", "Settings"];

export default function SideNavBar({
  className,
  setOpen,
}: Readonly<{ className?: string; setOpen: (open: boolean) => void }>) {
  return (
    <div
      className={cn(
        "fixed inset-0 min-w-[min(100%,250px)] h-full p-8 z-50 bg-white",
        className
      )}
    >
      <div className="float-end" onClick={() => setOpen(false)}>
        <X className="text-primary-500" />
      </div>
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
  );
}
