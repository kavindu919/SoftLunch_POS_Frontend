import { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <div className="flex h-full w-full flex-col px-4 py-4 md:px-8 lg:px-12">
      <Header
        toggleSidebar={() => setSidebarOpen((prev) => !prev)}
        isSidebaropen={sidebarOpen}
      />

      <SideBar
        toggleSidebar={() => setSidebarOpen((prev) => !prev)}
        isSidebaropen={sidebarOpen}
      />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
