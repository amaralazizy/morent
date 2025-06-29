import "@/app/globals.css";
import Navbar from "@/components/Navbar";
// import { ReactScan } from "@/app/ReactScan";
import Footer from "@/components/Footer";
import { plusJakarta } from "@/fonts";
import { SearchProvider } from "@/contexts/SearchContext";
import { PropsWithChildren } from "react";
export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <head>
        {/* <ReactScan /> */}
      </head>
      <body
        className={`${plusJakarta.className} antialiased font-default box-border`}
      >
        <div className="flex flex-col min-h-screen  mx-auto">
          <SearchProvider>
            <Navbar />
            <main className="flex flex-1 overflow-hidden bg-default-background">
              {children}
            </main>
          </SearchProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
