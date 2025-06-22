import { cn } from "@/lib/utils";

export default function Logo(className: Readonly<{ className?: string }>) {
  return (
    <>
      <div
        className={cn(
          "text-primary-500 font-bold text-[calc(max(1.5rem,0.25rem+3vw))] uppercase min-w-[148px] ",
          className
        )}
      >
        morent
      </div>
    </>
  );
}
