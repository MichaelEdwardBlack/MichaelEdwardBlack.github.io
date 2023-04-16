import { AnimatePresence, motion } from "framer-motion";
import { animations } from "../../constants/Animations";
import { Trinsic } from "./Trinsic";
import { PicoLabs } from "./PicoLabs";

const variants = {
  hidden: animations.hidden,
  visible: animations.visible,
};

export const Portfolio = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col items-center gap-8"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <h1>Portfolio</h1>
        <Trinsic />
        <hr className="w-full h-2 m-16 bg-gray-800 dark:bg-gray-200" />
        <PicoLabs />
      </motion.div>
    </AnimatePresence>
  );
};
