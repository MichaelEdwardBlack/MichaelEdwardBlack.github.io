import { motion } from "framer-motion";
import { ResumeCard } from "./ResumeCard";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { CloudIcon } from "../../components/AnimatedIcons/CloudIcon";

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
    <div className="flex flex-col items-center gap-2 pl-6 md:gap-8 md:pl-8">
      <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-4">
        <div className="relative">
          <h3 className="text-secondary-500">PicoLabs - UT</h3>
          <CloudIcon
            height={200}
            width={200}
            className="sticky top-12 text-secondary-500"
          />
        </div>
        <div className="flex col-span-3">
          <motion.div
            className="flex flex-col gap-4 text-lg"
            variants={variants.cards}
          >
            <ResumeCard
              text="Published production-level applications used by 100s of users"
              link={
                <a
                  className="text-blue-500 cursor-pointer hover:underline"
                  href="https://manifold.picolabs.io/#/login"
                >
                  Manifold
                </a>
              }
            />
            <ResumeCard
              text="Enabled email and telnet compatibility to the pico engine"
              link={
                <a
                  className="text-blue-500 cursor-pointer hover:underline"
                  href="https://github.com/Picolab/pico-engine"
                >
                  Pico Engine
                </a>
              }
            />
            <ResumeCard text="Contributed to the development of the Kinetic Rule Language to manage IoT devices" />
          </motion.div>
          <div
            className="flex flex-col w-4 pt-20 pr-6 transition-all duration-300 ease-in delay-100 cursor-default md:pr-8 hover:w-24 group"
            style={{ writingMode: "vertical-lr" }}
          >
            <div className="flex w-full">
              <div className="relative ml-3 border-t border-r border-black h-52 dark:border-white">
                <CalendarDaysIcon
                  height={24}
                  width={24}
                  className="absolute transition-transform duration-300 ease-in delay-100 bg-gray-200 group-hover:rotate-90 -top-3 -right-3 dark:bg-gray-800"
                />
                <h5 className="absolute left-0 transition-opacity duration-200 ease-in-out delay-200 bg-gray-200 opacity-0 -top-6 group-hover:opacity-100 dark:bg-gray-800">
                  2019
                </h5>
              </div>
              <div className="relative ml-3 border-b border-r border-black h-52 dark:border-white">
                <CalendarDaysIcon
                  height={24}
                  width={24}
                  className="absolute transition-transform duration-300 ease-in delay-100 bg-gray-200 group-hover:rotate-90 -bottom-3 -right-3 dark:bg-gray-800"
                />
                <h5 className="absolute left-0 transition-opacity duration-200 ease-in-out delay-200 bg-gray-200 opacity-0 -bottom-6 group-hover:opacity-100 dark:bg-gray-800">
                  2018
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
