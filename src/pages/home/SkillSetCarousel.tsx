import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 100,
    transition: {
      y: { type: "spring", stiffness: 200, damping: 30 },
      opacity: { duration: 0.5 },
    },
  },
  exit: {
    y: -100,
    opacity: 0.6,
  },
};

export const SkillSetCarousel = ({ skillSet }: { skillSet: number }) => {
  return (
    <AnimatePresence onExitComplete={() => console.log("exit complete")}>
      <div className="flex">
        {skillSet === 0 && (
          <motion.div
            key={0}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
          >
            This is the starting screen. Click on the svg to the left to view a
            skillset
          </motion.div>
        )}
        {skillSet === 1 && (
          <motion.div
            key={1}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
          >
            Monitor
          </motion.div>
        )}
        {skillSet === 2 && (
          <motion.div
            key={2}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            Mouse and Keyboard
          </motion.div>
        )}
        {skillSet === 3 && (
          <motion.div
            key={3}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            PC
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};
