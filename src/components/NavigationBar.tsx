import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/theme";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export const NavigationBar = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="sticky top-0 z-10 flex items-center justify-end gap-2 p-3 border-b-2 border-gray-800 dark:border-white backdrop-blur-sm">
      <div
        className={`h-8 w-14 bg-gray-300 dark:bg-gray-600 border-2 flex items-center justify-start dark:justify-end rounded-full py-2 px-1 cursor-pointer`}
        onClick={toggleTheme}
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full dark:bg-gray-800"
          layout
          transition={spring}
        >
          <SunIcon className="block text-yellow-500 dark:hidden" />
          <MoonIcon className="hidden text-yellow-500 dark:block" />
        </motion.div>
      </div>
    </div>
  );
};
