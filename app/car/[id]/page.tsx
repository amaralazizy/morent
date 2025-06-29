import CarDetails from "@/components/CarDetails";
import CarReviews from "@/components/CarReviews";
import RecentCars from "@/components/PopularCars";
import FilterSidebar from "@/components/FilterSideBar";
// interface CarPageProps {
//   params: { id: string };
// }

type CarPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CarPage({ params }: CarPageProps) {
  const { id } = await params;
  return (
    <div className="flex w-full">
      <FilterSidebar />
      <div className="bg-default-background p-8 flex-1">
        <div className="flex flex-col gap-8">
          <CarDetails id={id} />
          <CarReviews />
          <RecentCars title="Recent" />
        </div>
      </div>
    </div>
  );
}
