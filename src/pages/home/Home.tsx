import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { animations } from "../../constants/Animations";
import { Button } from "../../components/Buttons";
import {
  GamingPCSetupIcon,
  Group,
} from "../../components/AnimatedIcons/GamingPCSetup";
import { useState } from "react";
import { SkillSetCarousel } from "./SkillSetCarousel";

export const Home = () => {
  const navigate = useNavigate();
  const [selectedSkillSet, setSelectedSkillSet] = useState(0);

  const onSelectGroup = (group: Group) => {
    switch (group) {
      case "Monitor":
        setSelectedSkillSet(1);
        break;
      case "MnK":
        setSelectedSkillSet(2);
        break;
      case "Pc":
        setSelectedSkillSet(3);
        break;
      default:
        break;
    }
  };
  return (
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
          <Button className="w-48" onClick={() => navigate("/resume")}>
            Resume
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
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      <div className="py-16 text-white mt-44 skew-y-2 bg-secondary-500">
        <div className="grid grid-cols-2 -skew-y-2">
          <div className="flex justify-end">
            <GamingPCSetupIcon
              height={600}
              width={600}
              onGroupSelect={onSelectGroup}
            />
          </div>
          <SkillSetCarousel skillSet={selectedSkillSet} />
        </div>
      </div>

      <div className="h-64 py-16" id="contact">
        <div>This is where my contact page will go</div>
      </div>
    </div>
  );
};
