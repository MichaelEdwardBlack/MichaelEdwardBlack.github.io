import React from 'react';

export const Card = ({ children, className, size, shadowSize, ...props }) => {
  let classArray = [
    'rounded',
    `shadow-${shadowSize}`,
    'bg-white',
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
