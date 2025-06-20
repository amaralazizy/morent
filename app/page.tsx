import PickupDropoffSelector from "@/app/components/home/PickupDropoffSelector";
import PopularCars from "@/app/components/home/PopularCars";
import SloganCard from "@/app/components/home/sloganCard";

export default function Home() {
  return (
    <main className="p-8 flex-1 bg-default-background max-[920px]:relative max-sm:px-[10%] overflow-x-hidden overflex-y-scroll flex flex-col gap-8">
      <div className="flex">
        <div className="hidden absolute w-full h-[116px] top-0 left-0 bg-white max-[920px]:block"></div>
        <section className="w-full flex flex-wrap gap-8">
          <SloganCard
            header="The Best Platform for Car Rental"
            paragraph="Ease of doing a car rental safely and reliably. Of course at a low price."
            buttonColor="bg-primary-500"
            carImage="/car1.png"
            className="bg-[url('/elipses.png')] bg-information-500 bg-no-repeat bg-center bg-cover w-[calc((100%-32px)/2)] max-[820px]:w-full max-[820px]:p-4 max-sm:h-fit"
          />
          <SloganCard
            header="Easy way to rent a car at a low price"
            paragraph="Providing cheap car rental services and safe and comfortable facilities."
            buttonColor="bg-information-500"
            carImage="/car2.png"
            ImageClassName="w-[20vw] w-[20vw]"
            className="bg-[url('/arrows.png')] bg-primary-500 bg-no-repeat bg-center bg-cover w-[calc((100%-32px)/2)] max-[820px]:w-full max-[820px]:p-4 max-sm:h-fit max-[820px]:hidden max-sm:hidden"
          />
        </section>
      </div>
      <PickupDropoffSelector />
      <PopularCars  />
    </main>
  );
}
