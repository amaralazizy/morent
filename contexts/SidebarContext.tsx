"use client";
// import { useMediaQuery } from "@/hooks/use-mediaquery";
import { createContext, useContext, useState, useCallback } from "react";

interface SidebarContextType {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
  showSidebar: false,
  toggleSidebar: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  // const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    console.log("toggleSidebar");
    setShowSidebar((prev) => !prev);
  }, [setShowSidebar]);

  return (
    <SidebarContext.Provider
      value={{
        showSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  // console.log("no error");
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider", {
      cause: "SidebarProvider not found",
    });
  }
  return context;
}
