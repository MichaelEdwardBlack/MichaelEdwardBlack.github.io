import React from 'react';
import { connect } from 'react-redux';
import { changeTheme } from './actions';
import { HashRouter as Router, Route } from "react-router-dom";
import { MoonIcon, Navbar, SunIcon, ToggleButton } from './components';
import Home from './pages/Home';
import Portfolio from './pages/portfolio';
import Picolabs from './pages/portfolio/picolabs';
import Trinsic from './pages/portfolio/trinsic';
import Blog from './pages/blog';
import BlogPost from './pages/blog/BlogPost';
import { Theme } from './constants';

class App extends React.Component {
  toggleTheme = () => {
    if (this.props.theme === Theme.Light) {
      this.props.changeTheme(Theme.Dark)
    }
    else {
      this.props.changeTheme(Theme.Light)
    }
  }

  themeIcon = () => (this.props.theme === Theme.Light) 
    ? <SunIcon className="text-white"/> 
    : <MoonIcon className="text-black"/>;

  dotProps = () => (this.props.theme === Theme.Light) ? { className: "bg-black"} : { className: "bg-white"}

  render() {
    let theme = this.props.theme;

    return (
      <div className={`${theme.backgroundColor} ${theme.textColor} min-h-screen transition-colors duration-500`}>
        <Navbar className={`${theme.navbarBackground} ${theme.textColor}`}>
          <Navbar.Logo href="/#">
            <img src="/images/Blacklite.jpg" alt="Blacklite" className="w-12 h-12"/>
          </Navbar.Logo>
          <Navbar.List>
            <Navbar.Link href="/#/blog">
              Blog
            </Navbar.Link>
            <Navbar.Item>
              <ToggleButton dot={this.themeIcon()} dotProps={this.dotProps()} value={theme === Theme.Dark} onChange={e => this.toggleTheme()}/>
            </Navbar.Item>
          </Navbar.List>
        </Navbar>
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
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (theme) => {
      dispatch(changeTheme(theme))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
