"use client";
import { useSidebar } from "@/context/side-bar/side-bar.provider";
import VehicleEditor from "./vehicles-editor/vehicles-editor";
import DriversEditor from "./drivers-editor/drivers-editor";

import "./side-bar.styles.scss";

function Sidebar() {
  const { isOpen, component } = useSidebar();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {component === "vehicles" && <VehicleEditor />}
      {component === "drivers" && <DriversEditor />}
    </div>
  );
}

export default Sidebar;
