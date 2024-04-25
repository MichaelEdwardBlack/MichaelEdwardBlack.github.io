import { HashRouter as Router, Route } from "react-router-dom";
import { MoonIcon, Navbar, NavbarItem, NavbarLink, NavbarList, NavbarLogo, SunIcon, ToggleButton } from "./components";
import Home from "./pages/Home";
import Portfolio from "./pages/portfolio";
import Picolabs from "./pages/portfolio/picolabs";
import Trinsic from "./pages/portfolio/trinsic";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog/BlogPost";
import { Theme } from "./constants";
import { themeState } from "./atoms/theme";
import { useRecoilState } from "recoil";

export const App = () => {
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
    <div className={`${theme.backgroundColor} ${theme.textColor} min-h-screen transition-colors duration-500`}>
      <Navbar
        className={`${theme.navbarBackground} ${theme.textColor}`}
        brandLogo={
          <NavbarLogo href="/#">
            <img src="/images/Blacklite.jpg" alt="Blacklite" className="w-12 h-12" />
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
      ></Navbar>
      <Router basename="/">
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/portfolio/picolabs" component={Picolabs} />
        <Route exact path="/portfolio/trinsic" component={Trinsic} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogPost} />
      </Router>
    </div>
  );
};
