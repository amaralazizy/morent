import FilterSidebar from "@/components/FilterSideBar";
import { PropsWithChildren } from "react";

export default function SearchLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <div className="font-default flex w-full">
      <FilterSidebar />
      {children}
    </div>
  );
}
