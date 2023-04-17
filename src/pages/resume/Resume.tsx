import { motion } from "framer-motion";
import { animations } from "../../constants/Animations";
import { Trinsic } from "./Trinsic";
import { PicoLabs } from "./PicoLabs";
import { Button } from "../../components/Buttons";
import {
  ArrowDownTrayIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/solid";

const variants = {
  hidden: animations.hidden,
  visible: animations.visible,
};

const downloadFile = (filePath: string) => {
  let link = document.createElement("a");
  link.href = filePath;
  link.download = filePath.substr(filePath.lastIndexOf("/") + 1);
  link.click();
};

export const Resume = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-8"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h1>Resume</h1>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 w-44 group"
          onClick={() => window.open("/files/Resume.pdf", "_blank")}
        >
          View
          <ViewfinderCircleIcon
            height={20}
            width={20}
            className="transition-transform duration-500 delay-50 group-hover:rotate-180 group-hover:scale-110"
          />
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 w-44 group"
          onClick={() => downloadFile("/files/Resume.pdf")}
        >
          Download
          <ArrowDownTrayIcon
            height={20}
            width={20}
            className="group-hover:animate-bounce"
          />
        </Button>
      </div>
      <Trinsic />
      <hr className="w-full h-2 m-16 bg-gray-800 dark:bg-gray-200" />
      <PicoLabs />
    </motion.div>
  );
};
