import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { fetchProfile, updateProfile } from '../../../api/WovynAPI';

const cardContentHeight = "350px";

class WovynProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        "name": "",
        "location": "",
        "contact": "",
        "threshold": ""
      },
      updateProfile: {
        "new_sensor_name": "",
        "new_location": "",
        "new_send_to": "",
        "new_threshold": "",
      },
      error: false
    };
  }
  async componentDidMount() {
    try {
      let data = await fetchProfile();
      this.setState({
        profile: data,
        updateProfile: {
          "new_sensor_name": data.name,
          "new_location": data.location,
          "new_send_to": data.contact,
          "new_threshold": data.threshold
        }
      });
    } catch (e) {
      this.setState({ error: true })
    }
  }
  onUpdateProfile = async () => {
    let updatedProfile = this.state.updateProfile;
    await updateProfile(updatedProfile);
    let profile = await fetchProfile();
    this.setState({ profile });
  }
  handleChange = event => {
    let updatedProfile = this.state.updateProfile;
    updatedProfile[event.target.id] = event.target.value;
    this.setState({ updateProfile: updatedProfile })
  };
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
            Unable to get profile from the pico engine!
          </MuiAlert>
        </Snackbar>
        <Grid container justify="center" alignItems="center" spacing={3}>

          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent style={{ height: cardContentHeight }}>
                <h1>Profile</h1>
                <h2>{this.state.profile.name}</h2>
                <p>Location: {this.state.profile.location}</p>
                <p>Contact: {this.state.profile.contact}</p>
                <p>Threshold: {this.state.profile.threshold}</p>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent style={{ height: cardContentHeight }}>
                <h1>New Profile</h1>
                <FormControl>
                  <TextField
                    id="new_sensor_name"
                    label="Name"
                    value={this.state.updateProfile.new_sensor_name}
                    onChange={this.handleChange}
                  />
                  <TextField
                    id="new_location"
                    label="Location"
                    value={this.state.updateProfile.new_location}
                    onChange={this.handleChange}
                  />
                  <TextField
                    id="new_send_to"
                    label="Contact"
                    value={this.state.updateProfile.new_send_to}
                    onChange={this.handleChange}
                  />
                  <TextField
                    id="new_threshold"
                    label="Threshold"
                    value={this.state.updateProfile.new_threshold}
                    onChange={this.handleChange}
                  />
                  <Button color="secondary" onClick={this.onUpdateProfile}>Update</Button>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

      </Container>
    );
  }
}

export default WovynProfile;
