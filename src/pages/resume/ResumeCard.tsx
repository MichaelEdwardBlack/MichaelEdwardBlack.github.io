import { motion } from "framer-motion";
import { animations } from "../../constants/Animations";

const variants = {
  card: {
    hidden: animations.hidden,
    visible: animations.visible,
  },
  sentence: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  },
  word: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
};

const hasNumber = (aString: string) => {
  return /\d/.test(aString);
};

interface ResumeCardProps {
  text: string;
  link?: React.ReactNode;
  chips?: string[];
}

export const ResumeCard = ({ text, link, chips }: ResumeCardProps) => {
  return (
    <motion.div
      variants={variants.card}
      className="flex flex-col w-full gap-2 p-4 bg-gray-200 rounded-lg shadow-lg h-52 dark:bg-gray-700"
    >
      <motion.div
        className="flex gap-1 text-sm font-semibold whitespace-nowrap overflow-x-clip"
        variants={variants.sentence}
      >
        {chips?.map((chip, i) => (
          <div
            key={chip + i}
            className="px-2 py-1 rounded-full shadow bg-secondary-500"
          >
            {chip}
          </div>
        ))}
      </motion.div>

      <motion.div
        className="line-clamp-3 overflow-ellipsis"
        variants={variants.sentence}
      >
        {text.split(" ").map((word, i) => (
          <motion.span
            key={word + i}
            variants={variants.word}
            className={
              hasNumber(word)
                ? "text-secondary-500 font-bold"
                : "first-of-type:text-primary-500 first-of-type:font-bold"
            }
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>

      <div className="self-end mt-auto mb-0">{link}</div>
    </motion.div>
  );
};
