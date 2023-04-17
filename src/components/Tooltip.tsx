import { motion } from "framer-motion";
import { useRef } from "react";

interface TooltipProps extends React.PropsWithChildren {
  tooltip: string;
}
export const Tooltip = ({ tooltip, children }: TooltipProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!tooltipRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    tooltipRef.current.style.left = (e.clientX - containerRect.left) / 2 + "px";

    if (e.clientY - containerRect.top < 1) {
      // Mouse came from the top of this element
      tooltipRef.current.style.top = "auto";
      tooltipRef.current.style.bottom = "100%";
      tooltipRef.current.classList.remove("after:bottom-full")
      tooltipRef.current.classList.remove("after:top-auto")
      tooltipRef.current.classList.remove("after:border-b-black")
      tooltipRef.current.classList.add("after:top-full")
      tooltipRef.current.classList.add("after:bottom-auto")
      tooltipRef.current.classList.add("after:border-t-black")
    } else {
      // Mouse came from the bottom of this element
      tooltipRef.current.style.top = "100%";
      tooltipRef.current.style.bottom = "auto";
      tooltipRef.current.classList.remove("after:top-full")
      tooltipRef.current.classList.remove("after:bottom-auto")
      tooltipRef.current.classList.remove("after:border-t-black")
      tooltipRef.current.classList.add("after:bottom-full")
      tooltipRef.current.classList.add("after:top-auto")
      tooltipRef.current.classList.add("after:border-b-black")
    }
  };
  return (
    <div
      ref={containerRef}
      className="relative inline-block group"
      onMouseEnter={onMouseEnter}
    >
      <motion.div
        ref={tooltipRef}
        className="absolute invisible p-2 my-2 text-white transition bg-black bg-opacity-50 rounded group-hover:visible after:content-[' '] after:absolute after:w-2 after:h-2 after:border-8 after:border-opacity-50 after:border-transparent after:left-1/3"
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
        layout
      >
        {tooltip}
      </motion.div>
      {children}
    </div>
  );
};
