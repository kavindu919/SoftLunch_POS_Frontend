interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label: string;
}

const Input = ({ name, type, label, ...rest }: InputProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-1.5">
      <label className="text-sm md:text-base">{label}</label>
      <input
        type={type}
        name={name}
        className="focus:border-primarytext bg-shade h-11 w-full rounded-lg border-solid px-3 py-4 text-sm focus:border-2 focus:bg-transparent sm:w-72 md:w-80 md:text-base lg:w-86"
        {...rest}
      />
    </div>
  );
};

export default Input;
