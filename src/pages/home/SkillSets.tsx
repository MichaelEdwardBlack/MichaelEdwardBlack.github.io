import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const SkillSets = [
  <div className="flex flex-col items-center">
    <h2>Skills</h2>
    <div className="text-lg font-bold quote">Ogres are like computers. They have layers...</div>
    <div className="text-sm italic">- Shrek</div>
    <br />
    <div className="flex items-center">
      <motion.div className="hidden md:block" whileInView={{
        translateX: [0, -20, 0],
      }} transition={{
        duration: 1.5,
        ease: "easeOut",
        repeat: 6,
        repeatDelay: 0.8
      }}>
        <ArrowLeftIcon height={32} width={32} />
      </motion.div>
      <div>Interact with the illustration or swipe in any direction to view my different skills</div>
    </div>
  </div>,

  <div className="flex flex-col items-center">
    <h2>Frontend</h2>
    <div className="text-lg font-bold quote">Ogres are like computers. They have layers...</div>
    <div className="text-sm italic">- Shrek</div>
    <br />
    <div className="flex items-center">
      <motion.div className="hidden md:block" whileInView={{
        translateX: [0, -20, 0],
      }} transition={{
        duration: 1.5,
        ease: "easeOut",
        repeat: 6,
        repeatDelay: 0.8
      }}>
        <ArrowLeftIcon height={32} width={32} />
      </motion.div>
      <div>Interact with the illustration or swipe in any direction to view my different skills</div>
    </div>
  </div>,

  <div className="flex flex-col items-center">
    <h2>Backend</h2>
    <div className="text-lg font-bold quote">Ogres are like computers. They have layers...</div>
    <div className="text-sm italic">- Shrek</div>
    <br />
    <div className="flex items-center">
      <motion.div className="hidden md:block" whileInView={{
        translateX: [0, -20, 0],
      }} transition={{
        duration: 1.5,
        ease: "easeOut",
        repeat: 6,
        repeatDelay: 0.8
      }}>
        <ArrowLeftIcon height={32} width={32} />
      </motion.div>
      <div>Interact with the illustration or swipe in any direction to view my different skills</div>
    </div>
  </div>,

  <div className="flex flex-col items-center">
    <h2>Other Tools</h2>
    <div className="text-lg font-bold quote">Ogres are like computers. They have layers...</div>
    <div className="text-sm italic">- Shrek</div>
    <br />
    <div className="flex items-center">
      <motion.div className="hidden md:block" whileInView={{
        translateX: [0, -20, 0],
      }} transition={{
        duration: 1.5,
        ease: "easeOut",
        repeat: 6,
        repeatDelay: 0.8
      }}>
        <ArrowLeftIcon height={32} width={32} />
      </motion.div>
      <div>Interact with the illustration or swipe in any direction to view my different skills</div>
    </div>
  </div>,
]