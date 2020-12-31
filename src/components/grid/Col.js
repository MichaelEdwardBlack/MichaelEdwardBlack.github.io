import React from 'react';

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
  12: "w-full"
}

export const Col = ({ xs, sm, md, lg, xl, className, children, ...props }) => {
  let classArray = [
    breakpointWidth[xs]
  ]

  if (props.sm) {
    classArray.push("sm:" + breakpointWidth[sm])
  }
  if (props.md) {
    classArray.push("md:" + breakpointWidth[md])
  }
  if (props.lg) {
    classArray.push("lg:" + breakpointWidth[lg])
  }
  if (props.xl) {
    classArray.push("xl:" + breakpointWidth[xl])
  }

  classArray.push(className);

  let baseClass = classArray.join(' ');

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
}

Col.defaultProps = {
  xs: "auto",
  className: ""
}

export default Col;
