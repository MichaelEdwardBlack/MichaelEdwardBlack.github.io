import { motion } from "framer-motion";
import { ResumeCard } from "./ResumeCard";
import { Button } from "../../components/Buttons";
import { CloudIcon } from "../../components/AnimatedIcons/CloudIcon";
import { TimelineBar } from "./TimelineBar";

const variants = {
  cards: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.5,
      },
    },
  },
};

export const PicoLabs = () => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-4">
      <div className="relative">
        <h3 className="text-secondary-500">PicoLabs - UT</h3>
        <CloudIcon
          height={200}
          width={200}
          className="sticky text-secondary-500 top-12"
        />
      </div>
      <div className="flex md:col-span-3">
        <motion.div
          className="grid w-full grid-cols-1 gap-4 text-lg"
          variants={variants.cards}
        >
          <ResumeCard
            text="Something about Manifold"
            chips={["React", "KRL", "Node", "IoT"]}
            link={
              <Button
                onClick={() => window.open("https://manifold.picolabs.io/#/login", "_blank")}
              >
                See Project
              </Button>
            }
          ></ResumeCard>
          <ResumeCard
            chips={["Node", "Language Processing", "TCP", "Telnet"]}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            link={
              <Button
                onClick={() => window.open("https://www.farmerconnect.com", "_blank")}
              >
                See Website
              </Button>
            }
          ></ResumeCard>
          <ResumeCard
            chips={["gRPC", "Protobuf", "ASP.dotnet", "C#", "Python", "Go"]}
            text="Contributed to back-end applications that improved performance by more than 100x"
          ></ResumeCard>
        </motion.div>
        <TimelineBar span={3} startYear="2018" endYear="2019" />
      </div>
    </div>
  );
};



// "https://manifold.picolabs.io/#/login"
// "https://github.com/Picolab/pico-engine"