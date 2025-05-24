import FilterSidebar  from "@/app/search/components/filterSideBar";

export default function SearchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
      <div className="font-default flex w-full">
        <FilterSidebar className="max-lg:hidden" />
        {children}
      </div>
    );
}