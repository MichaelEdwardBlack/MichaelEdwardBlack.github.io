export type FabProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: "xs" | "sm" | "md" | "lg" | "xl";
};
export const Fab = ({ className, color, size = "md", children, ...props }: FabProps) => {
  let dimensions = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-14 h-14",
  };
  let classArray = [
    dimensions[size],
    "p-0",
    "duration-200",
    "ease-in",
    "rounded-full",
    "shadow",
    "active:shadow-lg",
    "mouse",
    "focus:outline-none",
    `bg-${color}-600`,
    `hover:bg-${color}-700`,
    className,
  ];

  let baseClass = classArray.join(" ");

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
};

Fab.defaultProps = {
  color: "primary", // any base color defined in tailwind config
  size: "md", // can be xs sm md lg xl
};

export default Fab;
