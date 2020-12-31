import React from 'react';

export const TextInput = ({ className, type="text", ...props }) => {
  let classArray = [
    "flex-auto",
    "leading-normal",
    "border",
    "h-10",
    "w-full",
    "border-gray-400",
    "rounded",
    "px-3",
    "relative",
    "focus:border-gray-500",
    "focus:shadow",
    "mt-1",
    "mb-2",
    className
  ]
  let baseClass = classArray.join(' ');

  return (
		<input
      type={type}
      className={baseClass}
      {...props}
    />
  );
}

export default TextInput;
