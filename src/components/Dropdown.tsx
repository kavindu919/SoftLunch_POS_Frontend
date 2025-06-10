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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="text-primarytext relative w-full max-w-48">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full cursor-pointer appearance-none items-center justify-around gap-3 rounded-2xl bg-white px-2 py-1 shadow-sm outline-none hover:shadow-md"
      >
        <span className="text-sm sm:text-base">{title}</span>
        <div className="bg-shade rounded-full md:p-2">
          <MdOutlineArrowDropDownCircle
            className={`text-theme text-lg transition-transform duration-500 sm:text-xl md:text-xl ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <ul
        className={`absolute right-0 left-0 z-10 mt-2 w-full overflow-hidden rounded-xl border-2 border-gray-200 bg-white px-4 py-2 text-sm shadow-md transition-all duration-300 ease-in-out sm:text-base ${
          isOpen
            ? "pointer-events-auto max-h-60 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        {element.map((ele, index) => (
          <li
            key={index}
            className="hover:bg-shade cursor-pointer rounded-sm px-2.5 py-1 text-left"
            data-value={ele.value}
          >
            {ele.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
