import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { light, dark } from './Themes';
import { changeTheme } from './actions';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/portfolio';
import Picolabs from './pages/portfolio/picolabs';
import Wovyn from './pages/portfolio/picolabs/Wovyn';
import Streetcred from './pages/portfolio/streetcred';


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
      <ThemeProvider theme={this.props.theme === "light" ? light : dark}>
        <CssBaseline>
          <Navbar toggleTheme={this.toggleTheme} />
          <Router basename="/">
            <Route exact path="/" component={Home}>
            </Route>
            <Route exact path="/portfolio" component={Portfolio}>
            </Route>
            <Route exact path="/portfolio/picolabs" component={Picolabs}>
              <Picolabs />
            </Route>
            <Route exact path="/portfolio/picolabs/wovyn" component={Wovyn}>
            </Route>
            <Route exact path="/portfolio/streetcred" component={Streetcred}>
            </Route>
          </Router>
        </CssBaseline>
      </ThemeProvider>
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
