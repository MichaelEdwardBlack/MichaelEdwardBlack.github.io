import { motion } from "framer-motion";
import { FingerPrintIcon } from "../../components/AnimatedIcons/FingerPrintIcon";
import { ResumeCard } from "./ResumeCard";
import { Button } from "../../components/Buttons";
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
            link={
              <Button
                onClick={() =>
                  window.open("https://dashboard.trinsic.id", "_blank")
                }
              >
                See Project
              </Button>
            }
          ></ResumeCard>
          <ResumeCard
            chips={["React", "Blockchain", "Supply Chain"]}
            text="Architected entire front-end platform for Farmer Connect raising over $5k a month and providing farmers all over the world with secure digital identity using SSI and Blockchain technologies"
            link={
              <Button
                onClick={() =>
                  window.open("https://www.farmerconnect.com", "_blank")
                }
              >
                See Website
              </Button>
            }
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
