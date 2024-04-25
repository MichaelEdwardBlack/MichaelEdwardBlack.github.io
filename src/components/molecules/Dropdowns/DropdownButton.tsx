export type DropdownButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const DropdownButton = ({ children, className, ...props }: DropdownButtonProps) => {
  let classArray = ["block", "overflow-hidden", "relative", "z-30", className];

  let baseClass = classArray.join(" ");

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
};
