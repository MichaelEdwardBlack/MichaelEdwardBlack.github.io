import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Portfolio extends React.Component {
  render() {
    return (
      <Container>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          style={{height: "50vh", textAlign: "center"}}
        >
          <Grid container item xs={12}>
              <Grid item xs>
                <h1>Pico Labs</h1>
                <Button variant="outlined" color="primary" href="/#/portfolio/picolabs">
                  View
                </Button>
              </Grid>

              <Grid item xs>
                <h1>Streetcred</h1>
                <Button variant="outlined" color="primary" href="/#/portfolio/streetcred">
                  View
                </Button>
              </Grid>

          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Portfolio;
