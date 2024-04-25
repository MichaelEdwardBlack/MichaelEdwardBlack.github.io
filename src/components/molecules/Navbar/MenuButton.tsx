export type MenuButtonProps = React.PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MenuButton = ({ children, className, ...props }: MenuButtonProps) => {
  let classArray = [
    "flex",
    "flex-none",
    "items-center",
    "px-2",
    "py-1",
    "h-8",
    "w-8",
    "border",
    "border-primary-400",
    "rounded",
    "hover:border-white",
    "float-right",
    className,
  ];

  let baseClass = classArray.join(" ");

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
};
