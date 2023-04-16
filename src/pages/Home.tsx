import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { animations } from "../constants/Animations";
import { Button } from "../components/Buttons";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      <div className="flex flex-col pt-32 text-center transition-colors duration-700 ease-in-out">
        <motion.div
          className="flex flex-col text-center"
          variants={animations.slideInFromBottom}
          initial="initial"
          animate="animate"
          exit={animations.hidden}
        >
          <h1>
            Hello, I'm <span className="text-primary-500">Michael Black</span>
          </h1>
          <h1>
            and I'm a{" "}
            <span className="text-primary-500">Full Stack Engineer</span>
          </h1>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <motion.div
            variants={animations.slideInFromLeft}
            initial="initial"
            animate="animate"
            exit={animations.hidden}
          >
            <Button className="w-48" onClick={() => navigate("/portfolio")}>
              Portfolio
            </Button>
          </motion.div>
          <motion.div
            variants={animations.slideInFromRight}
            initial="initial"
            animate="animate"
            exit={animations.hidden}
          >
            <Button
              variant="outline"
              className="w-48"
              onClick={() => navigate("/blog")}
            >
              Blog
            </Button>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
