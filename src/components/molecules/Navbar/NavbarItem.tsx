export type NavbarItemProps = React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;

export const NavbarItem = ({ children, className, ...props }: NavbarItemProps) => {
  let classArray = [
    "block",
    "mt-4",
    "mr-4",
    "lg:inline-block",
    "lg:mt-0",
    "cursor-pointer",
    "hover:text-primary-500",
    className,
  ];

  let baseClass = classArray.join(" ");

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};
