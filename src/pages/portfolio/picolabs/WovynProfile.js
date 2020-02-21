import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { fetchProfile, updateProfile } from '../../../api/WovynAPI';

class WovynProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        "name": "First Sensor",
        "location": "Timbuktu",
        "contact": "17195390627",
        "threshold": 90
      },
      updateProfile: {
        "new_sensor_name": "First Sensor",
        "new_location": "Timbuktu",
        "new_send_to": "17195390627",
        "new_threshold": 90,
      }
    };
  }
  async componentDidMount() {
    let data = await fetchProfile();
    console.log("fetch profile", data);
    this.setState({
      profile: data,
      updateProfile: {
        "new_sensor_name": data.name,
        "new_location": data.location,
        "new_send_to": data.contact,
        "new_threshold": data.threshold
      }
    });
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
  render() {
    return (
      <Container>
        <Grid container justify="center" alignItems="center">

          <Grid item xs={8} style={{ margin: "1rem" }}>
            <Card>
              <CardContent>
                <h1>Profile</h1>
                <h2>{this.state.profile.name}</h2>
                <p>Location: {this.state.profile.location}</p>
                <p>Contact: {this.state.profile.contact}</p>
                <p>Threshold: {this.state.profile.threshold}</p>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={8} style={{ margin: "1rem" }}>
            <Card>
              <CardContent>
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
