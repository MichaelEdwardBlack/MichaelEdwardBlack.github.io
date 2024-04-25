import { Children, cloneElement, isValidElement, useEffect, useState } from "react";
import { DropdownButton, DropdownButtonProps } from "./DropdownButton";
import { DropdownMenu } from "./DropdownMenu";

export const Dropdown = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const [showMenu, setShowMenu] = useState(false);
  const baseClass = ["relative", className].join(" ");

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Esc" || e.key === "Escape") {
      setShowMenu(false);
    }
  };

  const toggleDropdown = (e: any) => {
    setShowMenu(!showMenu);
  };

  const childrenWithProps = Children.map(props.children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (isValidElement(child)) {
      if (child.type === DropdownButton) {
        // @ts-ignore
        return cloneElement<DropdownButtonProps>(child, { onClick: toggleDropdown });
      }
    }
    return child;
  });
  const visibleChildren = Children.map(childrenWithProps, (child) => {
    if (isValidElement(child)) {
      if (child.type === DropdownMenu && showMenu === false) {
        return <></>;
      }
    }
    return child;
  });

  return (
    <div className={baseClass} {...props}>
      {visibleChildren}
      {showMenu && (
        <button
          className="fixed inset-0 z-10 w-full h-full bg-black opacity-50 cursor-default"
          onClick={() => setShowMenu(false)}
          tabIndex={-1}
        />
      )}
    </div>
  );
};
