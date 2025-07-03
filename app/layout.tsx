import "@/app/globals.css";
import { Navbar, MobileNavBar } from "@/components/Navbar";
// import { ReactScan } from "@/app/ReactScan";
import Footer from "@/components/Footer";
import { plusJakarta } from "@/fonts";
import { SearchProvider } from "@/contexts/SearchContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { PropsWithChildren } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <head>{/* <ReactScan /> */}</head>
      <body
        className={`${plusJakarta.className} antialiased font-default box-border selection:bg-primary-500 selection:text-white`}
      >
        <div className="flex flex-col min-h-screen mx-auto ">
          <SearchProvider>
            <SidebarProvider>
              <Navbar className="max-lg:hidden" />
              <MobileNavBar className="lg:hidden" />
              <main className="flex flex-1 overflow-hidden bg-default-background">
                {children}
                <SpeedInsights />
              </main>
            </SidebarProvider>
          </SearchProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
