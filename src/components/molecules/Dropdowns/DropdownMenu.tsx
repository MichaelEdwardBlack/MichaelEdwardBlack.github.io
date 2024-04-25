export const DropdownMenu = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  let classArray = ["absolute", "py-2", "mt-2", "w-48", "bg-white", "rounded-lg", "shadow-lg", "z-30", className];

  let baseClass = classArray.join(" ");

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};
