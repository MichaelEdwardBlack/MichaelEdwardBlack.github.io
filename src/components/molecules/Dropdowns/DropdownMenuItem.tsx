export const DropdownMenuItem = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  let classArray = ["block", "px-4", "py-2", "text-gray-800", "hover:bg-primary-500", "hover:text-white", className];

  let baseClass = classArray.join(" ");

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};
