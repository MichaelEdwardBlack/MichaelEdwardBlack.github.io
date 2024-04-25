export const TextInput = ({ className, type, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  let classArray = [
    "flex-auto",
    "leading-normal",
    "border",
    "h-10",
    "w-full",
    "border-gray-400",
    "rounded",
    "px-3",
    "relative",
    "focus:border-gray-500",
    "focus:shadow",
    "mt-1",
    "mb-2",
    className,
  ];
  let baseClass = classArray.join(" ");

  return <input className={baseClass} {...props} />;
};

export default TextInput;
