import { AnimatePresence, motion } from 'framer-motion';
import { animations } from '../../constants/Animations';

const variants = {
  hidden: animations.hidden,
  visible: animations.visible
}
export const Portfolio = () => {
  return (
    <AnimatePresence>
      <motion.article
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        Porfolio
      </motion.article>
    </AnimatePresence>
  );
}

