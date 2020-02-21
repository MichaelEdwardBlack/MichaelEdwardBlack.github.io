import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { fetchThresholdViolations } from '../../../api/WovynAPI';

class WovynViolations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperatures: {} };
  }
  async componentDidMount() {
    let data = await fetchThresholdViolations();
    this.setState({ temperatures: data });
  }
  renderTemperatureList() {
    const temps = this.state.temperatures;
    const keys = Object.keys(temps)
    var list = [];
    for (const key of keys) {
      let date = new Date(key);
      list.push(
        <Grid item xs={3} style={{ margin: "1rem" }} key={key}>
          <Card>
            <CardContent>
              <h3>{date.toDateString()}</h3>
              <h5>{date.toLocaleTimeString()}</h5>
              <h3>{temps[key]}°F</h3>
            </CardContent>
          </Card>
        </Grid>
      );
    }
    return list.reverse();
  }
  render() {
    return (
      <Container>
        <Grid container justify="center" alignItems="center">
            {this.renderTemperatureList()}
        </Grid>
      </Container>
    );
  }
}

export default WovynViolations;
