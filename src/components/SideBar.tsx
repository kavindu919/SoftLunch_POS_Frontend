import { RxDashboard } from "react-icons/rx";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { LuWarehouse } from "react-icons/lu";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface SideBarProps {
  toggleSidebar: () => void;
  isSidebaropen: boolean;
}

const SideBar = ({ toggleSidebar, isSidebaropen }: SideBarProps) => {
  return (
    <aside
      className={`absolute top-0 left-0 z-10 flex h-screen w-8 flex-col justify-between px-4 py-4 transition-all duration-300 ease-in-out sm:w-16 md:w-60 lg:w-72 ${isSidebaropen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}`}
    >
      <div className="bg-shade flex h-auto flex-row items-center justify-between rounded-xl p-3">
        <div className="flex flex-row items-center justify-between gap-4">
          <img
            src="https://picsum.photos/200"
            alt="profile image"
            className="h-12 w-12 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="text-primarytext text-xs font-semibold">
              User Name
            </h2>
            <h2 className="text-secondarytext text-xs">User Role</h2>
          </div>
        </div>
        <IoIosCloseCircleOutline
          className="text-theme cursor-pointer rounded-full text-4xl"
          onClick={toggleSidebar}
        />
      </div>
      <div>
        <ul className="text-sm md:text-base lg:text-lg">
          <li>
            <a
              href="/"
              className="group flex items-center gap-2 p-3 font-semibold active:bg-[#00ADB5]"
            >
              <div className="bg-shade rounded-full p-3 active:bg-[#EEEEEE]">
                <RxDashboard className="text-primarytext text-2xl" />
              </div>
              <span className="text-primarytext text-base group-active:text-[#EEEEEE]">
                Dashboard
              </span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="group active:bg-theme flex items-center gap-2 p-3 font-semibold"
            >
              <div className="bg-shade rounded-full p-3 active:bg-[#EEEEEE]">
                <IoPeopleCircleOutline className="text-primarytext text-2xl" />
              </div>
              <span className="text-primarytext text-base group-active:text-[#EEEEEE]">
                Staff
              </span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="group flex items-center gap-2 p-3 font-semibold active:bg-[#00ADB5]"
            >
              <div className="bg-shade rounded-full p-3 active:bg-[#EEEEEE]">
                <RiBillLine className="text-primarytext text-2xl" />
              </div>
              <span className="text-primarytext text-base group-active:text-[#EEEEEE]">
                Order
              </span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="group flex items-center gap-2 p-3 font-semibold active:bg-[#00ADB5]"
            >
              <div className="bg-shade rounded-full p-3 active:bg-[#EEEEEE]">
                <LuWarehouse className="text-primarytext text-2xl" />
              </div>
              <span className="text-primarytext text-base group-active:text-[#EEEEEE]">
                Inventory
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-shade flex flex-row items-center justify-between rounded-xl p-4">
        <span className="text-primarytext text-base font-normal">Log Out</span>
        <AiOutlineLogout className="text-primarytext text-2xl" />
      </div>
    </aside>
  );
};

export default SideBar;
