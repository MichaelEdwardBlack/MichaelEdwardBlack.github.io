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
  link?: string;
  linkIcon?: React.ReactNode;
  linkLabel?: string;
  chips?: string[];
}

export const ResumeCard = ({
  text,
  link,
  chips,
  linkLabel,
  linkIcon,
}: ResumeCardProps) => {
  return (
    <motion.div
      variants={variants.card}
      className="flex flex-col w-full max-w-4xl gap-2 p-4 rounded-lg shadow-lg to-gray-300 from-gray-100 bg-gradient-to-br h-52 dark:shadow-gray-900 dark:from-gray-700 dark:to-gray-900"
    >
      <a
        className="flex items-center self-end gap-2 text-primary-500 group"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <span className="transition duration-500 translate-x-4 opacity-0 whitespace-nowrap group-hover:translate-x-0 group-hover:opacity-100">
          {linkLabel}
        </span>
        <div className="w-8 h-8 transition-transform duration-200 group-hover:scale-110">
          {linkIcon}
        </div>
      </a>

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

      <motion.div
        className="flex gap-1 mt-auto mb-0 text-sm font-semibold whitespace-nowrap overflow-x-clip"
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
    </motion.div>
  );
};
