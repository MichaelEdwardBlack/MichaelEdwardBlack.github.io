import { motion } from "framer-motion";
import { animations } from "../../constants/Animations";
import { Trinsic } from "./Trinsic";
// import { PicoLabs } from "./PicoLabs";

const variants = {
  hidden: animations.hidden,
  visible: animations.visible,
};

export const Resume = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-8"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h1>Resume</h1>
      <h1>Resume</h1>
      <Trinsic />
      {/* <hr className="h-2 m-16 bg-gray-800 dark:bg-gray-200" />
      <PicoLabs /> */}
    </motion.div>
  );
};
