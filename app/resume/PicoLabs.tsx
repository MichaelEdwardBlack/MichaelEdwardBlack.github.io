import { motion } from "framer-motion";
import { ResumeCard } from "./ResumeCard";
import { CloudIcon } from "../../components/AnimatedIcons/CloudIcon";
import { TimelineBar } from "./TimelineBar";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { GithubIcon } from "../../components/AnimatedIcons/GithubIcon";

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
            text="Published production-level applications used by 100s of users allowing people to digitize and shadow real life things as IoT devices"
            chips={["React", "KRL", "Node", "IoT"]}
            link="https://manifold.picolabs.io/#/login"
            linkLabel="See Project"
            linkIcon={<WrenchScrewdriverIcon />}
          ></ResumeCard>
          <ResumeCard
            chips={["Node", "Language Processing", "TCP", "Telnet", "SMTP"]}
            text="Enabled email and telnet compatibility to the pico engine"
            link="https://www.farmerconnect.com"
            linkLabel="Source Code"
            linkIcon={<GithubIcon className="fill-primary-500" />}
          ></ResumeCard>
          <ResumeCard
            chips={["Node", "KRL", "IoT"]}
            text="Contributed to the development of the Kinetic Rule Language to manage IoT devices"
          ></ResumeCard>
        </motion.div>
        <TimelineBar span={3} startYear="2018" endYear="2019" />
      </div>
    </div>
  );
};
