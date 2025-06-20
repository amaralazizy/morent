import { PropsWithChildren } from "react";

export default function CarsLayout({ children }: PropsWithChildren) {
  return <div className="bg-default-background w-full p-global">{children}</div>;
}
