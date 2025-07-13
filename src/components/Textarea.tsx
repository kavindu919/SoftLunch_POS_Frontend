interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea = ({ name, label, ...rest }: TextareaProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-1.5">
      <label className="text-sm md:text-base">{label}</label>
      <textarea
        name={name}
        className="focus:border-primarytext bg-shade h-32 w-full rounded-lg border-solid px-3 py-2 text-sm focus:border-2 focus:bg-transparent md:text-base"
        {...rest}
      />
    </div>
  );
};

export default Textarea;
