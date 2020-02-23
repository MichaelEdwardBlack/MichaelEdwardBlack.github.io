import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{height: "60vh", textAlign: "center"}} >

          <Grid item xs={12}>
            <h1>Hello, I'm <span style={{ color: this.props.theme.palette.primary.main }}>Michael Black</span>.</h1>
            <h2>I'm a full-stack web developer</h2>
            <Button variant="outlined" color="primary" href="/#/portfolio">
              View My Work
            </Button>
          </Grid>

        </Grid>

      </Container>
    );
  }
}

export default withTheme(Home);
