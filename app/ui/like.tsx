import { Heart } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export default function Like() {
  return (
    <Toggle>
      <Heart className="w-4 h-4" />
    </Toggle>
  );
}
