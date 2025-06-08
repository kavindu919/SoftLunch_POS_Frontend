import Header from "../components/Header";
import SideBar from "../components/SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex h-full w-full flex-col px-4 py-4 md:px-8 lg:px-12">
      <Header />
      <SideBar />
      <div>main</div>
    </div>
  );
};

export default DashboardLayout;
