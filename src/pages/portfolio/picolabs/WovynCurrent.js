import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { fetchTemperatures } from '../../../api/WovynAPI';

class WovynCurrent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperatures: {} };
  }
  async componentDidMount() {
    let data = await fetchTemperatures();
    this.setState({ temperatures: data });
  }
  renderTemperatureList() {
    const temps = this.state.temperatures;
    const keys = Object.keys(temps)
    var list = [];
    for (const key of keys) {
      let date = new Date(key);
      list.push(
        <Grid item xs={8} style={{ margin: "1rem" }} key={key}>
          <Card raised>
            <CardContent style={{ textAlign: "center" }}>
              <h1>{date.toDateString()}</h1>
              <h2>{date.toLocaleTimeString()}</h2>
              <h1>{temps[key]}°F</h1>
            </CardContent>
          </Card>
        </Grid>
      );
    }
    return list.reverse()[0];
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

export default WovynCurrent;
