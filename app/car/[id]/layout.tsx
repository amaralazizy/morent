import FilterSidebar from "@/app/components/search/filterSideBar";
import { PropsWithChildren } from "react";

export default function CarLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <div className="flex w-full">
      <FilterSidebar />
      <div className="bg-default-background p-8 flex-1">{children}</div>
    </div>
  );
}