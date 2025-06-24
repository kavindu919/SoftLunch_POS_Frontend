import { LuMenu } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebaropen: boolean;
}

const Header = ({ toggleSidebar, isSidebaropen }: HeaderProps) => {
  const now = new Date();
  const weekday = now.toLocaleDateString("en-us", { weekday: "long" });
  const month = now.toLocaleDateString("en-us", { month: "long" });
  const year = now.getFullYear();
  const date = now.getDate();
  const time = now.toLocaleTimeString("en-us", { hour12: true });

  return (
    <header className="w-full py-2 md:py-4">
      <nav className="flex h-16 items-center justify-between md:h-20">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="cursor-pointer rounded-full bg-white p-2 shadow-sm transition hover:shadow-md md:p-3"
          >
            <LuMenu className="text-theme text-2xl md:text-3xl" />
          </button>
          {!isSidebaropen && (
            <h1 className="text-primarytext text-lg font-semibold sm:text-xl md:text-2xl">
              Dashboard
            </h1>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 rounded-xl bg-white px-4 py-2 shadow-sm hover:shadow-md">
          <IoCalendarNumberOutline className="text-theme text-xl md:text-2xl" />
          <span className="text-primarytext text-sm font-medium whitespace-nowrap md:text-base">
            {weekday}, {date} {month} {year}
          </span>

          <MdAccessTime className="text-theme text-xl md:text-2xl" />
          <span className="text-primarytext text-sm font-medium md:text-base">
            {time}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
