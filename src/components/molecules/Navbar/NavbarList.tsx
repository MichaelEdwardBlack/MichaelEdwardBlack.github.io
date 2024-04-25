export type NavbarListProps = React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;

export const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
  let classArray = ["flex-grow", "block", "w-full", "lg:flex", "lg:items-center", "lg:w-auto"];

  let innerClass = [
    "text-lg",
    "inline-flex",
    "flex-col",
    "items-center",
    "lg:flex-grow",
    "lg:flex-row",
    className,
  ].join(" ");

  let baseClass = classArray.join(" ");
  return (
    <div className={baseClass}>
      <div className={innerClass} {...props}>
        {children}
      </div>
    </div>
  );
};
