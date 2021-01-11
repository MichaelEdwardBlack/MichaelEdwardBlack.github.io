import React from 'react';

export const Button = ({ className, color, variant, children, ...props }) => {
  let classArray = [
    "font-bold",
    "py-2",
    "px-4",
    className
  ]
  const defaultClass = `bg-${color}-500 hover:bg-${color}-600 text-white rounded-full`;
  const outlineClass = `bg-transparent hover:bg-${color}-500 text-${color}-500 font-semibold hover:text-white border border-${color}-500 hover:border-transparent rounded-full`

  switch (variant) {
    case "outline":
      classArray.unshift(outlineClass);
      break;
    default:
      classArray.unshift(defaultClass);
      break;
  }
  let baseClass = classArray.join(' ');

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: "default", // can be default, outline
  color: "primary" // any base color defined in tailwind config
}

export default Button;