import { motion } from "framer-motion";
import { FingerPrintIcon } from "../../components/AnimatedIcons/FingerPrintIcon";
import { ResumeCard } from "./ResumeCard";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Buttons";
import { Tooltip } from "../../components/Tooltip";

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
  const navigate = useNavigate();
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
            chips={["React", "ASP.net", "Blazor", "Typescript", "gRPC"]}
            link={
              <div className="flex gap-2">
                <Button
                  color="secondary"
                  onClick={() => navigate("https://dashboard.trinsic.id")}
                >
                  See Project
                </Button>
                <Tooltip tooltip="Source Code is Private">
                  <Button variant="outline" color="secondary" disabled>
                    Source Code
                  </Button>
                </Tooltip>
              </div>
            }
          ></ResumeCard>
          <ResumeCard
            chips={["React"]}
            text="Architected entire front-end platform for Farmer Connect raising over $5k a month and providing farmers all over the world with secure digital identity using SSI and Blockchain technologies"
            link={
              <a
                className="text-blue-500 cursor-pointer hover:underline"
                href="https://www.farmerconnect.com/"
              >
                Farmer Connect
              </a>
            }
          ></ResumeCard>
          <ResumeCard
            chips={["React"]}
            text="Developed a front end application for thousands of farmers across the world to hold their personal credentials"
          ></ResumeCard>
          <ResumeCard
            chips={["gRPC", "Protobuf", "ASP.dotnet", "C#", "Python", "Go"]}
            text="Contributed to back-end applications that improved performance by more than 100x"
          ></ResumeCard>
        </motion.div>
        <div
          className="flex flex-col w-5 pt-24 pr-6 transition-all duration-300 ease-in delay-100 cursor-default md:pr-8 hover:w-24 group"
          style={{ writingMode: "vertical-lr" }}
        >
          <div className="flex w-full">
            <div className="relative ml-3 border-t border-r border-black h-52 dark:border-white">
              <CalendarDaysIcon
                height={24}
                width={24}
                className="absolute transition-transform duration-300 ease-in delay-100 bg-gray-200 group-hover:rotate-90 -top-3 -right-3 dark:bg-gray-800"
              />
              <h5 className="absolute transition-all duration-200 ease-in-out delay-200 bg-gray-200 group-hover:z-0 -z-50 -left-3 -top-6 dark:bg-gray-800">
                2023
              </h5>
            </div>
            <div className="ml-3 border-r border-black h-52 dark:border-white" />
            <div className="relative ml-3 border-b border-r border-black h-52 dark:border-white">
              <CalendarDaysIcon
                height={24}
                width={24}
                className="absolute transition-transform duration-300 ease-in delay-100 bg-gray-200 group-hover:rotate-90 -bottom-3 -right-3 dark:bg-gray-800"
              />
              <h5 className="absolute transition-all duration-200 ease-in-out delay-200 bg-gray-200 group-hover:z-0 -z-50 -left-3 -bottom-6 dark:bg-gray-800">
                2019
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
