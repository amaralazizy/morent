import "./globals.css";
import Navbar from "./ui/navbar";
import { SidebarProvider } from "./context/SidebarContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-default flex flex-col h-screen box-border">
        <SidebarProvider>
          <Navbar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
