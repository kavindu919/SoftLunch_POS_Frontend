interface InputProps {
  name: string;
  type: string;
  lable: string;
}

const Input = ({ name, type, lable }: InputProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-1.5">
      <label className="text-sm md:text-base">{lable}</label>
      <input
        type={type}
        name={name}
        className="h-11 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm shadow sm:w-72 md:w-80 md:text-base lg:w-86"
      />
    </div>
  );
};

export default Input;
