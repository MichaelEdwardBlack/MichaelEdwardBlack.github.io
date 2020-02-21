import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class Picolabs extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: "1rem" }}>
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        <Grid container justify="center" alignItems="center">
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <h1>Wovyn</h1>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/#/portfolio/picolabs/wovyn">Go To Project</Button>
                </CardActions>
              </Card>
            </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Picolabs;
