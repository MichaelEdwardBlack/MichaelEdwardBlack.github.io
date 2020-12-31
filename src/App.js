import React from 'react';
import { connect } from 'react-redux';
import { changeTheme } from './actions';
import { HashRouter as Router, Route } from "react-router-dom";
import { Navbar } from './components';
import Home from './pages/Home';
import Portfolio from './pages/portfolio';
import Picolabs from './pages/portfolio/picolabs';
import Trinsic from './pages/portfolio/trinsic';
import Blog from './pages/blog';
import AzureSecrets from './pages/blog/AzureSecrets';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    if (this.props.theme === "light") {
      this.props.changeTheme("dark")
    }
    else {
      this.props.changeTheme("light")
    }
  }
  render() {
    return (
      <>
        <Navbar toggleTheme={this.toggleTheme}>
          <Navbar.Logo>
            <svg className="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span className="text-xl font-semibold tracking-tight">Tailwind CSS</span>
          </Navbar.Logo>
          <Navbar.List>
            <Navbar.Item>
              Item 1
            </Navbar.Item>
            <Navbar.Item>
              Item 2
            </Navbar.Item>
            <Navbar.Item>
              Item 3
            </Navbar.Item>
            <Navbar.Item className="text-red-400" style={{ float: "right" }}>
              Float right
            </Navbar.Item>
          </Navbar.List>
        </Navbar>
        <Router basename="/">
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/portfolio/picolabs" component={Picolabs} />
          <Route exact path="/portfolio/trinsic" component={Trinsic} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/AzureSecrets" component={AzureSecrets} />
        </Router>
      </>
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
