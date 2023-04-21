interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  isError?: boolean;
  errorMessage?: string;
  labelClassName?: string;
  labelIcon?: React.ReactNode;
}

export const Input = ({
  label,
  labelIcon,
  labelClassName,
  isError,
  errorMessage,
  className,
  ...props
}: InputProps) => {
  return (
    <label>
      <span className={labelClassName}>
        {labelIcon}
        {label}
      </span>
      <input
        className={`w-full p-2 border border-gray-400 rounded text-black ${className} ${
          isError ? "border-red-600 bg-red-50" : ""
        }`}
        {...props}
      />
      {isError && <div className="mt-2 text-negative-600">{errorMessage}</div>}
    </label>
  );
};
