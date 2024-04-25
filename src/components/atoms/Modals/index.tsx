import React, { useEffect } from "react";
import { XIcon } from "../Icons";

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  open: boolean;
  onClose: (
    e: KeyboardEvent | React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => void;
};
export const Modal = ({
  children,
  className,
  open = true,
  onClose = () => {
    return;
  },
  ...props
}: ModalProps) => {
  const classArray = [
    "bg-white",
    "rounded",
    "shadow",
    "p-8",
    "m-4",
    "max-w-sm",
    "max-h-full",
    "text-center",
    "overflow-y-auto",
    "relative",
    className,
  ];

  const baseClass = classArray.join(" ");

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Esc" || e.key === "Escape") {
      onClose(e);
    }
  };

  if (open) {
    return (
      <>
        <div className="fixed inset-0 bg-black opacity-50 cursor-default" onClick={onClose} tabIndex={-1} />
        <div className="fixed inset-0">
          <div className="absolute flex items-center justify-center w-full h-screen p-8">
            <div className={baseClass} {...props}>
              <XIcon
                className="absolute top-0 right-0 w-4 h-4 mt-4 mr-4 text-gray-700 cursor-pointer"
                onClick={onClose}
              />
              {children}
            </div>
          </div>
        </div>
      </>
    );
  } else return <></>;
};

export default Modal;
