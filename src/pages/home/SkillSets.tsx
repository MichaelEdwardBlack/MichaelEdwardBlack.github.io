import { ArrowLeftIcon, HandRaisedIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

export const SkillSets = [
  <div className="flex flex-col items-center gap-3 text-lg font-semibold">
    <h2>Skills</h2>
    <div className="text-xl font-bold text-center quote">
      You know, like nunchuck skills, bow hunting skills, computer hacking
      skills...
    </div>
    <div className="text-sm italic">- Napoleon Dynamite</div>
    <br />
    <div className="relative">
      <motion.div
        className="absolute hidden -left-8 md:block"
        whileInView={{
          translateX: [0, -20, 0],
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          repeat: 6,
          repeatDelay: 0.8,
        }}
      >
        <ArrowLeftIcon
          height={32}
          width={24}
          fontWeight={40}
          className="stroke-[20px]"
        />
      </motion.div>
      <div>Interact with the illustration</div>
    </div>
    <div className="text-base font-normal">- or -</div>
    <div className="flex items-center">
      <AnimatePresence>
        <motion.div
          key="leftHand"
          animate={{ translateX: [0, -30, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: 6, repeatDelay: 3, delay: 3 }}
        >
          <HandRaisedIcon height={24} width={24} />
        </motion.div>
        <div key="text">Swipe in any direction</div>
        <motion.div
          key="rightHand"
          animate={{ translateX: [0, 30, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: 6, repeatDelay: 3, delay: 6 }}
        >
          <HandRaisedIcon height={24} width={24} />
        </motion.div>
      </AnimatePresence>
    </div>
  </div>,

  <div className="flex flex-col gap-3 text-lg font-semibold">
    <h2 className="self-start justify-self-start">Frontend</h2>
    <ul className="list-disc">
      <li>React</li>
      <li>React Native</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Typescript</li>
      <li>NodeJS</li>
      <li>Blazor</li>
      <li>Flutter</li>
    </ul>
  </div>,

  <div className="flex flex-col gap-3 text-lg font-semibold">
    <h2 className="self-start justify-self-start">Backend</h2>
    <ul className="list-disc">
      <li>ASP.Net</li>
      <li>C#</li>
      <li>Java</li>
      <li>AWS</li>
      <li>Azure</li>
      <li>SQL and NoSQL Databases</li>
      <li>Restful API</li>
      <li>gRPC</li>
    </ul>
  </div>,

  <div className="flex flex-col gap-3 text-lg font-semibold">
    <h2 className="self-start justify-self-start">Other Tools</h2>
    <ul className="list-disc">
      <li>Github</li>
      <li>Protobuf</li>
      <li>Informatica</li>
      <li>AWS</li>
      <li>Figma</li>
      <li>Azure</li>
    </ul>
  </div>,
];
