import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import { AnimatePresence, motion } from "framer-motion";

const animations = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="flex flex-col text-center">
        <AnimatePresence>
          <motion.div
            className="flex flex-col text-center"
            variants={animations}
            initial="initial"
            animate="animate"
          >
            <h1>
              Hello, I'm <span className="text-primary-500">Michael Black</span>
            </h1>
            <h1>
              and I'm a{" "}
              <span className="text-primary-500">Full Stack Engineer</span>
            </h1>
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center justify-center mt-8">
          <Button className="w-48 mx-2">Portfolio</Button>
          <Button
            variant="outline"
            className="w-48 mx-2"
            onClick={() => navigate("/#/blog")}
          >
            Blog
          </Button>
        </div>
      </div>
    </div>
  );
};
