import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/portfolio';
import Picolabs from './pages/portfolio/picolabs';
import Wovyn from './pages/portfolio/picolabs/Wovyn';
import Streetcred from './pages/portfolio/streetcred';

const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#996bf5',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: '#de6bf5',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function App() {
  return (
      <ThemeProvider theme={dark}>

        <div>
          <Navbar />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
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
        </div>

      </ThemeProvider>
  );
}

export default App;
