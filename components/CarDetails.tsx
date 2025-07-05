import CarPreview from "@/components/CarPreview";
import CarDescription from "@/components/CarDescription";
interface CarDetailsProps {
  id: string;
}
export default function CarDetails({ id }: CarDetailsProps) {

  return (
    <div className="flex gap-8 max-xl:flex-col">
      <CarPreview className="flex-1 max-xl:mx-[2.5%]" />
      <CarDescription className="flex-1" id={id} />
    </div>
  );
}
