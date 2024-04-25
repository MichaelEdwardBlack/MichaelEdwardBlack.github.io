export const Row = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  let classArray = ["flex", "mb-4", className];

  let baseClass = classArray.join(" ");

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  className: "",
};

export default Row;
