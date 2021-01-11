import React from 'react';

export const Card = ({ children, className, size, shadowSize, ...props }) => {
  let classArray = [
    'relative',
    'rounded',
    `shadow-${shadowSize}`,
    'max-w-xs',
    'w-full',
    "p-5",
    "m-5",
    "group",
    className?.includes("h-") ? "" : "h-64",
    className?.includes("bg-") ? "" : 'bg-white',
    className
  ]
  let baseClass = classArray.join(' ');

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  shadowSize: "md"
}

export default Card;
