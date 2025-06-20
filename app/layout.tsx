import "./globals.css";
import Navbar from "./ui/navbar";
import { ReactScan } from "@/app/ReactScan";
import Footer from "@/app/components/home/Footer";
import { plusJakarta } from "@/app/ui/fonts";
import { SearchProvider } from "@/app/context/searchContext";
import { PropsWithChildren } from "react";
export default function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <head>
        <ReactScan />
      </head>
      <body
        className={`${plusJakarta.className} antialiased font-default box-border`}
      >
        <div className="flex flex-col min-h-screen">
          <SearchProvider>
              <Navbar />
              <main className="flex flex-1 overflow-hidden">{children}</main>
          </SearchProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
