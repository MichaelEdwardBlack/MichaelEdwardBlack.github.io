import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PortfolioIcon from '@material-ui/icons/FolderShared';
import HomeIcon from '@material-ui/icons/Home';


export default function Navbar() {
  const [portfolioAnchorEl, setportfolioAnchorEl] = React.useState(null);

  const handlePortfolioClick = event => {
    setportfolioAnchorEl(event.currentTarget);
  };

  const handlePortfolioClose = () => {
    setportfolioAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>

        <IconButton href="/">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6">
          Home
        </Typography>

        <IconButton aria-controls="portfolio-menu" aria-haspopup="true" onClick={handlePortfolioClick}>
          <PortfolioIcon />
        </IconButton>
        <Typography variant="h6" onClick={handlePortfolioClick}>
          Portfolio
        </Typography>
        <Menu
          id="portfolio-menu"
          anchorEl={portfolioAnchorEl}
          keepMounted
          open={Boolean(portfolioAnchorEl)}
          onClose={handlePortfolioClose}
        >
          <MenuItem onClick={() => window.location.href = "/portfolio/picolabs"}>Picolabs</MenuItem>
          <MenuItem onClick={() => window.location.href = "/portfolio/streetcred"}>Streetcred</MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
}
