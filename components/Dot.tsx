import { cn } from "@/lib/utils";

export default function Dot({className}: Readonly<{className?: string}>) {
  return (
    <div className="p-1 bg-primary-500/30 rounded-full w-fit">
      <div className={cn("rounded-full bg-primary-500 w-2 aspect-square", className)}></div>
    </div>
  );
}
