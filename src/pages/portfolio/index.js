import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';

const commonCardHeight = "200px";

class Portfolio extends React.Component {
  render() {
    const palette = this.props.theme.palette;
    return (
      <Container>
        <h1>Organizations</h1>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid container item spacing={3}>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent style={{ height: commonCardHeight }}>
                    <h2>
                      <span onClick={() => window.open("http://picolabs.io/", "_blank")} style={{ color: palette.primary.main }} className="pointer">Pico Labs</span>
                    </h2>
                    <p>Pico Labs at Brigham Young University creates Internet of Things technology that preserves personal freedom.</p>
                    <p>Pico Labs is responsible for Picos, an actor-based programming system that supports people-centric, reactive programming on the Internet of Things.</p>
                  </CardContent>
                  <CardActions>
                    <Button color="secondary" href="/#/portfolio/picolabs">View Projects</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent style={{ height: commonCardHeight }}>
                    <h2>
                      <span onClick={() => window.open("https://streetcred.id/", "_blank")} style={{ color: palette.primary.main }} className="pointer">Streetcred</span>
                    </h2>
                    <p>Brings life-like identity online</p>
                    <p>Easily integrate self-sovereign identity with just a few lines of code.</p>
                  </CardContent>
                  <CardActions>
                    <Button color="secondary" href="/#/portfolio/streetcred">View Projects</Button>
                  </CardActions>
                </Card>
              </Grid>

          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withTheme(Portfolio);
