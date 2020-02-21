import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import WovynRecent from './WovynRecent';
import WovynProfile from './WovynProfile';
import WovynCurrent from './WovynCurrent';
import WovynViolations from './WovynViolations';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Wovyn() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <br />
      <h1 style={{ textAlign: "center" }}>Lab 5 SPA</h1>
      <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs">
        <Tab label="Current" {...a11yProps(0)} />
        <Tab label="Recent" {...a11yProps(1)} />
        <Tab label="Violations" {...a11yProps(2)} />
        <Tab label="Profile" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <WovynCurrent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WovynRecent />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WovynViolations />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <WovynProfile />
      </TabPanel>
    </Container>
  );
}
