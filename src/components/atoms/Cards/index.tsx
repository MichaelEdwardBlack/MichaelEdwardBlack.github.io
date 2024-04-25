export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  shadowSize?: "sm" | "md" | "lg";
};
export const Card = ({ children, className, shadowSize = "md", ...props }: CardProps) => {
  let classArray = [
    "relative",
    "rounded",
    `shadow-${shadowSize}`,
    "max-w-xs",
    "w-full",
    "p-5",
    "m-5",
    "group",
    className?.includes("h-") ? "" : "h-64",
    className?.includes("bg-") ? "" : "bg-white",
    className,
  ];
  let baseClass = classArray.join(" ");

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};

export default Card;
