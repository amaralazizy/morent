import { StarIcon as LucideStarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StarIconProps = {
  className?: string;
  active: number;
};

export default function RatingStarIcons({ className, active }: StarIconProps) {
  const styles = {
    active: { 
        stroke: "text-[#FBAD39]",
        fill: "#FBAD39"
    },
    inactive: {
        stroke: "text-secondary-300",
        fill: "none"
    },
  };

  return (
    <div className="flex items-center gap-1">
    {Array.from({ length: active }).map((_, index) => (
      <LucideStarIcon
        key={index}
        className={cn(
          `w-4 h-4 ${styles.active.stroke}`,
          className
      )}
      fill={styles.active.fill}
    />
    ))}
    {Array.from({ length: 5 - active }).map((_, index) => (
      <LucideStarIcon
        key={index}
        className={cn(
          `w-4 h-4 ${styles.inactive.stroke}`,
          className
        )}
        fill={styles.inactive.fill}
      />
    ))}
    </div>
  );
}
