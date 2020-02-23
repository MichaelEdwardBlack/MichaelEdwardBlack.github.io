import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const commonCardHeight = "300px";
class Picolabs extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: "1rem" }}>
        <h1>Projects</h1>
        <Grid container spacing={3}>

            <Grid item xs={12} md={6}>
              <Card>
                <CardContent style={{ height: commonCardHeight }}>
                  <h2>Wovyn</h2>
                  <h4>Author</h4>
                  <p>Wovyn temperature communicate to a Pico which records temperatures and threshold violations</p>
                </CardContent>
                <CardActions>
                  <Button color="secondary" href="/#/portfolio/picolabs/wovyn">Go To Project</Button>
                  <IconButton onClick={() => window.open("https://github.com/michaelblack117/picolabs-lab5", '_blank')}>
                    <GitHubIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardContent style={{ height: commonCardHeight }}>
                  <h2>Manifold</h2>
                  <h4>Contributor</h4>
                  <p>Manifold is a platform that allows you to connect and interact with your things.</p>
                  <p>From car keys to smarthome devices, Manifold offers control</p>
                  <p>Discover new ways to make your things smart</p>
                </CardContent>
                <CardActions>
                  <Button color="secondary" onClick={() => window.open("https://manifold.picolabs.io/#/login")}>Try it out!</Button>
                  <IconButton onClick={() => window.open("https://github.com/Picolab/Manifold", "_blank")}>
                    <GitHubIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>

        </Grid>
      </Container>
    );
  }
}

export default Picolabs;
