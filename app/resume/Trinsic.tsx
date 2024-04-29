import { motion } from "framer-motion";
import { FingerPrintIcon } from "../../components/AnimatedIcons/FingerPrintIcon";
import { ResumeCard } from "./ResumeCard";
import { TimelineBar } from "./TimelineBar";
import {
  GlobeAmericasIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

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
  link: {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
    static: { x: 0, opacity: 1 },
  },
};

export const Trinsic = () => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-4">
      <div className="relative">
        <h3 className="text-blue-500">Trinsic - UT</h3>
        <FingerPrintIcon
          height={200}
          width={200}
          className="sticky text-blue-500 top-12"
        />
      </div>
      <div className="flex md:col-span-3">
        <motion.div
          className="grid grid-cols-1 gap-4 text-lg"
          variants={variants.cards}
        >
          <ResumeCard
            text="Created a studio for other developers to create and issue over 1,000 credentials per month"
            chips={[
              "React",
              "ASP.net",
              "Blazor",
              "Typescript",
              "gRPC",
              "Blockchain",
              "Hyperledger",
            ]}
            link="https://dashboard.trinsic.id"
            linkLabel="See Project"
            linkIcon={<WrenchScrewdriverIcon />}
          ></ResumeCard>
          <ResumeCard
            chips={["React", "Blockchain", "Supply Chain"]}
            text="Architected entire front-end platform for Farmer Connect raising over $5k a month and providing farmers all over the world with secure digital identity using SSI and Blockchain technologies"
            link="https://www.farmerconnect.com"
            linkLabel="See Website"
            linkIcon={<GlobeAmericasIcon />}
          ></ResumeCard>
          <ResumeCard
            chips={["React", "Internationalization"]}
            text="Developed a front end application for thousands of farmers across the world to hold their personal credentials"
          ></ResumeCard>
          <ResumeCard
            chips={["gRPC", "Protobuf", "ASP.dotnet", "C#", "Python", "Go"]}
            text="Contributed to back-end applications that improved performance by more than 100x"
          ></ResumeCard>
        </motion.div>
        <TimelineBar span={4} startYear="2019" endYear="2023" />
      </div>
    </div>
  );
};
