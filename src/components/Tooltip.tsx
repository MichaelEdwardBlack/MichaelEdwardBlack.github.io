import { motion } from "framer-motion";
import { useRef } from "react";

interface TooltipProps extends React.PropsWithChildren {
  tooltip: string;
}
export const Tooltip = ({ tooltip, children }: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!tooltipRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    tooltipRef.current.style.left = (e.clientX - containerRect.left) / 2 + "px";
    if (containerRect.top - e.clientY === 0) {
      tooltipRef.current.style.top = "-200%";
    } else {
      tooltipRef.current.style.top = "100%";
    }
  };
  return (
    <motion.div
      ref={containerRef}
      className="relative inline-block group"
      onMouseEnter={onMouseEnter}
      layout
    >
      {children}
      <div
        ref={tooltipRef}
        className="absolute invisible p-2 text-white transition bg-black bg-opacity-50 rounded group-hover:visible"
      >
        {tooltip}
      </div>
    </motion.div>
  );
};
