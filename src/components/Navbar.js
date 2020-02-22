import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withTheme } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PortfolioIcon from '@material-ui/icons/FolderShared';
import HomeIcon from '@material-ui/icons/Home';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { portfolioAnchorEl: null }

    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.handlePortfolioClose = this.handlePortfolioClose.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
    this.renderThemeIcon = this.renderThemeIcon.bind(this);
  }
  handlePortfolioClick = event => {
    this.setState({ portfolioAnchorEl: event.currentTarget });
  };
  handlePortfolioClose = () => {
    this.setState({ portfolioAnchorEl: null });
  };
  navigateTo(event) {
    this.handlePortfolioClose();
    window.location.href = event.target.id;
  }
  renderThemeIcon() {
    if (this.props.theme.palette.type === "light") {
      return <Brightness4Icon />
    }
    else return <Brightness7Icon />
  }
  render() {
    return (
      <AppBar position="static">
        <Toolbar>

          <IconButton href="/">
            <HomeIcon />
          </IconButton>
          <Typography id="/home" className="pointer" onClick={this.navigateTo} variant="h6">
            Home
          </Typography>

          <IconButton aria-controls="portfolio-menu" aria-haspopup="true" onClick={this.handlePortfolioClick}>
            <PortfolioIcon />
          </IconButton>
          <Typography className="pointer" variant="h6" onClick={this.handlePortfolioClick}>
            Portfolio
          </Typography>
          <Menu
            id="portfolio-menu"
            anchorEl={this.state.portfolioAnchorEl}
            keepMounted
            open={Boolean(this.state.portfolioAnchorEl)}
            onClose={this.handlePortfolioClose}
          >
            <MenuItem id="/#/porfolio/picolabs" onClick={this.navigateTo}>Picolabs</MenuItem>
            <MenuItem id="/#/porfolio/streetcred" onClick={this.navigateTo}>Streetcred</MenuItem>
          </Menu>

          <IconButton onClick={this.props.toggleTheme} >
            {this.renderThemeIcon()}
          </IconButton>
          <Typography className="pointer" variant="h6" onClick={this.props.toggleTheme}>
            {(this.props.theme.palette.type === "light") ? "Dark Mode" : "Light Mode"}
          </Typography>

        </Toolbar>
      </AppBar>
    );
  }
}

export default withTheme(Navbar);
