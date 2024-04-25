export type CarouselItemProps = React.HTMLAttributes<HTMLDivElement> & {
  active: boolean;
};
export const CarouselItem = ({ className, active = false, children, ...props }: CarouselItemProps) => {
  let baseClass = [
    "absolute",
    "inset-0",
    "flex",
    "items-center",
    "justify-center",
    "w-full",
    "h-full",
    "transition-all",
    "ease-in-out",
    "duration-1000",
    "transform",
    active ? "translate-x-0" : "translate-x-full",
    "slide",
    className,
  ].join(" ");

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};
