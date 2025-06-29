import { cn } from "@/lib/utils";
import Dot from "@/components/Dot";


const variantStyles = {
  default: {
    heading: "font-semibold text-lg",
  },
  rentForm: {
    heading: "font-semibold",
  },
};




export default function DotHeading({
  className,
  children,
  variant = "default",
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "rentForm";
}) {
  const styles = variantStyles[variant];
  return (
    <div className={cn("flex items-center gap-2 mb-6", className)}>
      <Dot />
      <h3 className={styles.heading}>{children}</h3>
    </div>
  );
}