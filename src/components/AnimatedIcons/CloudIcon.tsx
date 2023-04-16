import { AnimatePresence, motion } from "framer-motion";
import { IconProps } from "./types";

export const CloudIcon = ({ height, width, opacity, className }: IconProps) => {
  return (
    <AnimatePresence>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        width={width.toString()}
        height={height.toString()}
        opacity={opacity ? opacity : 1}
        className={`${className ? className : ""}`}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          exit={{ pathLength: 0 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </svg>
    </AnimatePresence>
  );
};
