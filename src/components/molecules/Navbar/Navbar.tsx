import { useState } from "react";
import { HamburgerIcon, XIcon } from "../../atoms";
import { MenuButton } from "./MenuButton";
export type NavbarProps = {
  className: string;
  brandLogo: React.ReactNode;
  itemList: React.ReactNode;
};
export const Navbar = (props: NavbarProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const classArray = ["flex", "flex-wrap", "items-center", "justify-between", "p-6"];

  return (
    <nav className={[...classArray, props.className].join(" ")}>
      <div className="flex items-center justify-between w-full lg:hidden">
        {props.brandLogo}
        <div className={"block w-full"}>
          <MenuButton onClick={() => setShowMenu(!showMenu)}>
            {showMenu && <XIcon />}
            {showMenu === false && <HamburgerIcon className="pl-px ml-px" />}
          </MenuButton>
        </div>
      </div>
      <div className="flex items-center w-full lg:hidden">
        {showMenu && <div className="flex-1">{props.itemList}</div>}
      </div>
    </nav>
  );
};
