import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { withTheme } from '@material-ui/core/styles';

import { fetchTemperatures, fetchProfile } from '../../../api/WovynAPI';

class WovynCurrent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperatures: {}, threshold: 100, error: false };
  }
  async componentDidMount() {
    try {
      let temperatureData = await fetchTemperatures();
      let profileData = await fetchProfile();
      this.setState({ temperatures: temperatureData, threshold: profileData.threshold });
    } catch (e) {
      this.setState({ error: true })
    }
  }
  renderCurrentTemperature() {
    const { temperatures, threshold } = this.state;
    const palette = this.props.theme.palette;
    // check if we have received data from the pico-engine
    if (temperatures) {
      return (
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <h2>No Recorded Temperature Readings</h2>
            </CardContent>
          </Card>
        </Grid>
      );
    }
    const keys = Object.keys(temperatures).reverse();
    let date = new Date(keys[0])
    const currentTemp = temperatures[keys[0]];
    const tempColor = currentTemp >= threshold ? palette.danger.main : palette.success.main;
    return (
      <Grid item xs={12} style={{ margin: "1rem" }} key={keys[0]}>
        <Card raised>
          <CardContent style={{ textAlign: "center" }}>
            <h1>{date.toDateString()}</h1>
            <h2>{date.toLocaleTimeString()}</h2>
            <h1 style={{ color: tempColor}}>{currentTemp}°F</h1>
          </CardContent>
        </Card>
      </Grid>
    );
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ error: false });
  };

  render() {
    return (
      <Container>
        <Snackbar open={this.state.error} autoHideDuration={6000} onClose={this.handleClose}>
          <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity="error">
            Unable to get temperatures from the pico engine!
          </MuiAlert>
        </Snackbar>
        <Grid container justify="center" alignItems="center">
            {this.renderCurrentTemperature()}
        </Grid>
      </Container>
    );
  }
}

export default withTheme(WovynCurrent);
