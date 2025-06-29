
import PickupDropoffSelector from "@/components/PickupDropoffSelector";
import SearchResults from "@/components/SearchResults";

export default function SearchPage() {
  return (
    <section className="bg-default-background p-8 flex-1 max-w-screen flex flex-col gap-8">
      <PickupDropoffSelector
        className="relative"
        switchClassName="absolute left-1/2 -translate-x-1/2 shadow-md shadow-[#103293]/32"
      />
      <div className="flex flex-col gap-4 ">
        <SearchResults />
      </div>
    </section>
  );
}
