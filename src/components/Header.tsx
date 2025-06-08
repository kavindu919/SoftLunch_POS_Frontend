import { LuMenu } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";

const Header = () => {
  const now = new Date();
  const weekday = now.toLocaleDateString("en-us", { weekday: "long" });
  const month = now.toLocaleDateString("en-us", { month: "long" });
  const year = now.getFullYear();
  const date = now.getDate();
  const time = now.toLocaleTimeString("en-us", { hour12: true });
  return (
    <header className="md:h20 flex h-16 w-full items-center justify-between">
      <nav className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <div className="bg-shade cursor-pointer rounded-full p-3">
            <LuMenu className="text-theme text-3xl" />
          </div>

          <span className="text-primarytext text-lg font-normal sm:text-2xl md:text-4xl">
            Dashboard
          </span>
        </div>

        <section className="bg-shade flex cursor-pointer flex-row items-center gap-3 rounded-full p-4">
          <IoCalendarNumberOutline className="text-theme text-2xl" />
          <span className="text-primarytext text-base font-semibold">
            {weekday}, {date} {month} {year}
          </span>

          <MdAccessTime className="text-theme text-2xl" />
          <span className="text-primarytext text-base font-semibold">
            {time}
          </span>
        </section>
      </nav>
    </header>
  );
};

export default Header;
