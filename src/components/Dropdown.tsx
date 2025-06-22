import React from "react";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  title: string;
  name: string;
  id: string;
  options: Option[];
  defaultValue?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  label,
  name,
  id,
  options,
  defaultValue = "",
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <label htmlFor={id} className="mb-1 block text-sm md:text-base">
        {title}
      </label>
      <div className="relative">
        <select
          name={name}
          id={id}
          className="bg-shade focus:border-primarytext h-12 w-full cursor-pointer appearance-none rounded-lg px-3 py-2 pr-10 text-sm focus:bg-white focus:ring-2 focus:outline-none md:text-base"
          defaultValue={defaultValue}
        >
          <option value="" disabled>
            {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
