import { ReactNode, useState } from "react";
import "./ToggleButton.css";

export type ToggleButtonProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  lineProps?: React.HTMLAttributes<HTMLDivElement>;
  dotProps?: React.HTMLAttributes<HTMLDivElement>;
  dot: ReactNode;
  isChecked: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const ToggleButton = ({
  className,
  isChecked = false,
  onChange,
  lineProps,
  dot,
  dotProps,
  inputProps,
  children,
  ...props
}: ToggleButtonProps) => {
  let baseClass = ["cursor-pointer", className].join(" ");
  let dotClass = [
    "absolute",
    "inline-flex",
    "items-center",
    "justify-center",
    "inset-y-0",
    "-left-1",
    "-top-1",
    "w-6",
    "h-6",
    "transition-all",
    "duration-700",
    "ease-in-out",
    dotProps?.className?.includes("bg") ? "" : "bg-white",
    "rounded-full",
    "shadow",
    "toggle__dot",
    dotProps?.className,
  ].join(" ");
  delete dotProps?.className;

  let lineClass = [
    "w-10",
    "h-4",
    "bg-gray-400",
    "rounded-full",
    "shadow-inner",
    "toggle__line",
    lineProps?.className,
  ].join(" ");
  delete lineProps?.className;

  const [checked, setChecked] = useState(isChecked);

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <label htmlFor="toggle" className={baseClass} {...props}>
      {/* <!-- toggle --> */}
      <div className="relative">
        {/* <!-- input --> */}
        <input
          id="toggle"
          type="checkbox"
          className="hidden toggle__input"
          checked={checked}
          onChange={onCheck}
          {...inputProps}
        />
        {/* <!-- line --> */}
        <div className={lineClass} {...lineProps} />
        {/* <!-- dot --> */}
        <div className={dotClass} {...dotProps}>
          {dot}
        </div>
      </div>
      {/* Label Text */}
      {children}
    </label>
  );
};

export default ToggleButton;
