"use client";
import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext({
  isOpen: true,
  openSidebar: (component: string, metadata: Record<string, any>) => {},
  closeSidebar: () => {},
  component: "",
  metaData: null as any,
});

export function useSidebar() {
  return useContext(SidebarContext);
}

type SidebarProviderProps = {
  readonly children: any;
};

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [component, setComponent] = useState<string>("");
  const [metaData, setMetadata] = useState<Record<string, any>>({});


  const openSidebar = (component: string, metadata: Record<string, any>) => {
    setComponent(component);
    setMetadata(metadata);
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        openSidebar,
        closeSidebar,
        component,
        metaData,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
