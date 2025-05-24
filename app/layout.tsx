import "./globals.css";
import Navbar from "./ui/navbar";
import { ReactScan } from "@/app/ReactScan";
import Footer from "@/components/home/Footer";
import { plusJakarta } from "@/app/ui/fonts";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ReactScan />
      </head>
      <body className={`${plusJakarta.className} antialiased font-default box-border`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-1 overflow-hidden">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
