import { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="text-primarytext relative w-auto">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full cursor-pointer appearance-none items-center justify-between gap-3 rounded-2xl border-2 border-gray-200 bg-white px-4 py-2 text-base shadow-sm outline-none sm:text-lg"
      >
        <span>Select Year</span>
        <div className="bg-shade rounded-full md:p-2">
          <MdOutlineArrowDropDownCircle
            className={`text-theme text-lg transition-transform duration-500 sm:text-xl md:text-2xl ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {isOpen && (
        <ul
          className={`absolute right-0 left-0 z-10 mt-2 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2 text-base shadow-md transition-all duration-200 ease-in-out sm:text-lg ${isOpen ? "pointer-events-auto max-h-screen opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}
        >
          <li className="hover:bg-shade cursor-pointer rounded-sm px-2.5 py-1 text-left">
            2023
          </li>
          <li className="hover:bg-shade cursor-pointer rounded-sm px-2.5 py-1 text-left">
            2023
          </li>
          <li className="hover:bg-shade cursor-pointer rounded-sm px-2.5 py-1 text-left">
            2023
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
