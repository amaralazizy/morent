import FilterSidebar  from "@/app/components/search/filterSideBar";
import { PropsWithChildren } from "react";

export default function SearchLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <div className="font-default flex w-full">
      <FilterSidebar className="max-lg:hidden" />
        {children}
      </div>
    );
}