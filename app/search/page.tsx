import PickupDropoffSelector from "@/components/home/PickupDropoffSelector";

export default function SearchPage() {
    return (
      <section className="bg-default-background p-8 flex-1">
        <PickupDropoffSelector
          className="relative"
          switchClassName="absolute left-1/2 -translate-x-1/2 shadow-md shadow-[#103293]/32"
        />
      </section>
    );
}