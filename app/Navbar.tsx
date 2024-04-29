import Image from "next/image";
import { themeState } from "@/atoms/theme";
import {
  Navbar as BaseNavbar,
  MoonIcon,
  NavbarItem,
  NavbarLink,
  NavbarList,
  NavbarLogo,
  SunIcon,
  ToggleButton,
} from "@/components";
import { Theme } from "@/constants";
import { useRecoilState } from "recoil";

export const Navbar = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const toggleTheme = () => {
    if (theme === Theme.Light) {
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
    }
  };

  const themeIcon = () =>
    theme === Theme.Light ? <SunIcon className="text-white" /> : <MoonIcon className="text-black" />;

  const dotProps = () => (theme === Theme.Light ? { className: "bg-black" } : { className: "bg-white" });

  return (
    <BaseNavbar
      className={`${theme.navbarBackground} ${theme.textColor}`}
      brandLogo={
        <NavbarLogo href="/">
          <Image
            src="/michaeledwardblack.github.io/BlackliteCircleLogo.png"
            alt="Blaclite Logo"
            width={100}
            height={24}
            priority
          />
        </NavbarLogo>
      }
      itemList={
        <NavbarList>
          <NavbarLink href="/#/blog">Blog</NavbarLink>
          <NavbarItem>
            <ToggleButton
              dot={themeIcon()}
              dotProps={dotProps()}
              isChecked={theme === Theme.Dark}
              onChange={toggleTheme}
            />
          </NavbarItem>
        </NavbarList>
      }
    />
  );
};
