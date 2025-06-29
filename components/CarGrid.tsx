import { cn } from "@/lib/utils";

export default function CarGrid({
  children,
  className,
}: Readonly<{ children: React.ReactNode, className?: string }>) {
  return (
    <div
      className={cn(
        "grid grid-cols-[repeat(auto-fill,minmax(317px,1fr))] gap-4 mb-16 w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
