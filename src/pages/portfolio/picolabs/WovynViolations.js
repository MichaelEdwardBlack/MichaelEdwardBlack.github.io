import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { withTheme } from '@material-ui/core/styles';

import { fetchThresholdViolations } from '../../../api/WovynAPI';

class WovynViolations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperatures: {}, error: false };
  }
  async componentDidMount() {
    try {
      let data = await fetchThresholdViolations();
      this.setState({ temperatures: data });
    } catch (e) {
      this.setState({ error: true })
    }
  }
  renderTemperatureList() {
    const { temperatures, threshold } = this.state;
    const palette = this.props.theme.palette;

    // check if we have received data from the pico-engine
    if (temperatures) {
      return (
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <h2>No Recorded Temperature Violations</h2>
            </CardContent>
          </Card>
        </Grid>
      );
    }

    const keys = Object.keys(temperatures)
    var list = [];
    for (const key of keys) {
      let date = new Date(key);
      let temperature = temperatures[key];
      let tempColor = palette.danger.main;
      list.push(
        <Grid item xs={3} key={key}>
          <Card>
            <CardContent>
              <h3>{date.toDateString()}</h3>
              <h5>{date.toLocaleTimeString()}</h5>
              <h3 style={{ color: tempColor }}>{temperature}°F</h3>
            </CardContent>
          </Card>
        </Grid>
      );
    }
    return list.reverse(); // to order it with most recent at the top
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
            {this.renderTemperatureList()}
        </Grid>
      </Container>
    );
  }
}

export default withTheme(WovynViolations);
