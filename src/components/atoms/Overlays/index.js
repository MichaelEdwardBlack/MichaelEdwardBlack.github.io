export const Overlay = ({ className, hover, centered, children, ...props}) => {
  let baseClass = [
    "absolute",
    "inset-0",
    hover ? "opacity-0 group-hover:opacity-100" : "",
    className?.match(/bg-(?!opacity)/g) ? "" : "bg-black",
    className?.includes("bg-opacity-") ? "" : "bg-opacity-50",
    className
  ].join(' ');

  return (
    <div className={baseClass} {...props}>
      {centered && 
        <div className="flex items-center justify-center w-full h-full transform">
          {children}
        </div>
      }
      {!centered && children}
    </div>
  );
}