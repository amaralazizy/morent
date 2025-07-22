import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

interface SelectTriggerProps {
  buttonClassName?: string;
  value: string;
  placeholder: string;
  open: boolean;
  onClick?: () => void;
}

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ buttonClassName, value, placeholder, open, onClick, ...props }, ref) => (
    <Button
      ref={ref}
      type="button"
      onClick={onClick}
      className={cn(
        "has-[>svg]:p-0 overflow-hidden flex justify-between w-full",
        buttonClassName
      )}
      variant="outline"
      role="combobox"
      aria-expanded={open}
      {...props}
    >
      <span
        className={`truncate ${value ? "text-black" : "text-secondary-300"}`}
      >
        {value || placeholder}
      </span>
      <ChevronDown className="h-[14px] aspect-square text-black" />
    </Button>
  )
);

SelectTrigger.displayName = "SelectTrigger";

export default SelectTrigger;
