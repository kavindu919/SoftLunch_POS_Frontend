import { GrSearch } from "react-icons/gr";

interface SearchbarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
}

const Searchbar = ({ name, type, ...rest }: SearchbarProps) => {
  return (
    <div className="bg-shade flex h-11 w-full flex-row items-center gap-1.5 rounded-lg border border-transparent px-3 py-4 text-sm focus-within:border-2 focus-within:border-black focus-within:bg-transparent sm:w-72 md:w-80 md:text-base lg:w-96">
      <GrSearch className="text-2xl" aria-hidden="true" />
      <input
        name={name}
        type={type}
        placeholder="Search..."
        aria-label="Search input"
        className="w-full bg-transparent outline-none"
        {...rest}
      />
    </div>
  );
};

export default Searchbar;
