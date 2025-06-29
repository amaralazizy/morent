import CarPreview from "@/components/CarPreview";
import CarDescription from "@/components/CarDescription";
interface CarDetailsProps {
  id: string;
}
export default function CarDetails({ id }: CarDetailsProps) {

  return (
    <div className="flex gap-8">
      <CarPreview className="flex-1" />
      <CarDescription className="flex-1" id={id} />
    </div>
  );
}
