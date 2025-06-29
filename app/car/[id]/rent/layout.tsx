import { PropsWithChildren } from "react";

export default function RentLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <div className="w-full min-h-screen">{children}</div>
  );
}