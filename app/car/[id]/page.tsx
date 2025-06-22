import CarDetails from "@/components/CarDetails";
import CarReviews from "@/components/CarReviews";
import RecentCars from "@/app/components/home/PopularCars";
interface CarPageProps {
  params: Promise<{ id: string }>;
}

export default async function CarPage({ params }: CarPageProps) {
  const { id } = await params;
  return (
    <div className="flex flex-col gap-8">
      <CarDetails />
      <CarReviews />
      <RecentCars title="Recent" />
    </div>
  );
}
