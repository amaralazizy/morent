import { cn } from "@/lib/utils";

export default function CarGrid({
  children,
  className,
}: Readonly<{ children: React.ReactNode, className?: string }>) {
  return (
    <div
      className={cn(
        "grid grid-cols-[repeat(auto-fit,minmax(317px,max-content))] gap-4 mb-16 w-full justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}
