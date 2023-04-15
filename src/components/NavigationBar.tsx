import { Bars3Icon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/theme";

export const NavigationBar = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // const themeIcon = () =>
  //   theme === "light" ? (
  //     <SunIcon className="text-white" />
  //   ) : (
  //     <MoonIcon className="text-black" />
  //   );
  return (
    <div className="items-center w-full p-2 mx-2 border-b-2 border-black dark:border-white">
      <Bars3Icon height={24} width={24} onClick={toggleTheme} />
    </div>
  );
};
