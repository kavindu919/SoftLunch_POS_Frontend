import SideBar from "../components/SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex h-full w-full flex-row">
      <SideBar />
      <div>main</div>
    </div>
  );
};

export default DashboardLayout;
