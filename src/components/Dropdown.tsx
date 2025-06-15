import { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

interface DropdownItem {
  value: string;
  text: string;
}

interface DropdownProps {
  title: string;
  element: DropdownItem[];
}

const Dropdown = ({ title, element }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-primarytext relative w-full max-w-48 text-sm">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-2 rounded-xl bg-white px-4 py-2 shadow-sm transition hover:shadow-md focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate text-left text-sm sm:text-base">{title}</span>
        <div className="bg-shade rounded-full p-1.5">
          <MdOutlineArrowDropDownCircle
            className={`text-theme text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Dropdown List */}
      <ul
        className={`absolute right-0 left-0 z-10 mt-2 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white py-2 shadow-lg transition-all duration-200 ease-in-out ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        role="listbox"
      >
        {element.map((ele, index) => (
          <li
            key={index}
            data-value={ele.value}
            className="hover:bg-shade cursor-pointer px-4 py-2 text-sm text-gray-800 transition"
            role="option"
          >
            {ele.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
