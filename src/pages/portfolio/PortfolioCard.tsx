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

interface PortfolioCardProps {
  text: string;
  link?: React.ReactNode;
}

export const PortfolioCard = ({ text, link }: PortfolioCardProps) => {
  return (
    <motion.div
      variants={variants.card}
      className="flex flex-col justify-between w-full h-48 p-4 overflow-hidden bg-gray-200 rounded-lg shadow-lg dark:bg-gray-700"
    >
      <motion.div variants={variants.sentence}>
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
      <div className="self-end">{link}</div>
    </motion.div>
  );
};
