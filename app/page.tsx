import PickupDropoffSelector from "@/components/home/PickupDropoffSelector";
import PopularCars from "@/components/home/PopularCars";
import SloganCard from "@/components/home/sloganCard";
// import FilterSidebar from "./ui/filterSideBar";

export default function Home() {
  return (
    <main className="px-16 pt-8 pb-8 flex-1 bg-default-background max-[920px]:relative max-sm:px-[10%]">
      {/* <FilterSidebar /> */}
      <div className="flex mb-8">
        <div className="hidden absolute w-full h-[116px] top-0 left-0 bg-white max-[920px]:block"></div>
        <section className="w-full flex flex-wrap gap-8">
          <SloganCard
            header="The Best Platform for Car Rental"
            paragraph="Ease of doing a car rental safely and reliably. Of course at a low price."
            buttonColor="bg-primary-500"
            carImage="/car1.png"
            className="bg-[url('/elipses.png')] bg-information-500 bg-no-repeat bg-center bg-cover"
          />
          <SloganCard
            header="Easy way to rent a car at a low price"
            paragraph="Providing cheap car rental services and safe and comfortable facilities."
            buttonColor="bg-information-500"
            carImage="/car2.png"
            ImageClassName="w-[20vw] w-[20vw]"
            className="bg-[url('/arrows.png')] bg-primary-500 bg-no-repeat bg-center bg-cover max-[820px]:hidden max-sm:hidden"
          />
        </section>
      </div>
      <PickupDropoffSelector />
      <PopularCars />
    </main>
  );
}
