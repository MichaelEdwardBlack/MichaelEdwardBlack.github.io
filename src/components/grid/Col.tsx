const breakpointWidth = {
  auto: "flex-1",
  1: "w-1/12",
  2: "w-1/6",
  3: "w-1/4",
  4: "w-1/3",
  5: "w-5/12",
  6: "w-1/2",
  7: "w-7/12",
  8: "w-2/3",
  9: "w-3/4",
  10: "w-5/6",
  11: "w-11/12",
  12: "w-full",
};

export type ColProps = React.HTMLAttributes<HTMLDivElement> & {
  xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
};
export const Col = ({ xs = "auto", sm, md, lg, xl, className = "flex flex-col", children, ...props }: ColProps) => {
  let classArray = [breakpointWidth[xs], className];

  if (sm) {
    classArray.push("sm:" + breakpointWidth[sm]);
  }
  if (md) {
    classArray.push("md:" + breakpointWidth[md]);
  }
  if (lg) {
    classArray.push("lg:" + breakpointWidth[lg]);
  }
  if (xl) {
    classArray.push("xl:" + breakpointWidth[xl]);
  }

  let baseClass = classArray.join(" ");

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};

export default Col;
