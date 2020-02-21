import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/portfolio';
import Picolabs from './pages/portfolio/picolabs';
import Wovyn from './pages/portfolio/picolabs/Wovyn';
import Streetcred from './pages/portfolio/streetcred';
// Dark #212121
// Primary #996bf5
// Secondary #de6bf5

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
    <Router>
      <ThemeProvider theme={dark}>

        <div>
          <Navbar />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/portfolio/picolabs">
              <Picolabs />
            </Route>
            <Route exact path="/portfolio/picolabs/wovyn">
              <Wovyn />
            </Route>
            <Route exact path="/portfolio/streetcred">
              <Streetcred />
            </Route>
          </Switch>
        </div>

      </ThemeProvider>
    </Router>
  );
}

export default App;
