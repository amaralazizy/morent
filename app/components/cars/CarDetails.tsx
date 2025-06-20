import CarPreview from "./CarPreview";
import CarDescription from "./CarDescription";
export default function CarDetails() {
  

  return (
    <div className="flex gap-8">
      <CarPreview className="flex-1" />
      <CarDescription className="flex-1" />
    </div>
  );
}
