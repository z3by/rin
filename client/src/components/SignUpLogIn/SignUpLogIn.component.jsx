import React, { Component } from "react";
import "./SignUpLogIn.css";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CardActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";

const SignupForm = props => {
  return (
    <CardContent className="box-form">
      <TextField
        className="box-input color-3"
        label="Email"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        name="email"
        type="email"
        required
        value={"hello"}
      />
      <TextField
        className="box-input color-3"
        label="First Name"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        name="firstName"
        type="text"
        required
        value={"hello"}
      />
      <TextField
        className="box-input color-3"
        label="Last Name"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        name="lastName"
        type="text"
        required
        value={"hello"}
      />
      <TextField
        className="box-input color-3"
        label="Organization Name"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        name="organizationName"
        type="text"
        required
        value={"hello"}
      />
      <TextField
        className="box-input color-3"
        label="Password"
        type="password"
        InputLabelProps={{ shrink: true }}
        name="password"
        variant="outlined"
        required
        value={"hello"}
      />
      <TextField
        className="box-input color-3"
        label="Confirm Password"
        type="password"
        InputLabelProps={{ shrink: true }}
        name="password2"
        variant="outlined"
        required
        value={"hello"}
      />
      <FormControl className="box-input">
        <InputLabel htmlFor="role">User Role</InputLabel>
        <Select
          value={1}
          onChange={this.handleChange}
          inputProps={{ name: "role", id: "role" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Entrepreneur</MenuItem>
          <MenuItem value={2}>Investor</MenuItem>
          <MenuItem value={3}>humanitarian community</MenuItem>
        </Select>
      </FormControl>
    </CardContent>
  );
};

const LoginForm = props => {
  return (
    <CardContent className="box-form">
      <TextField
        className="box-input color-3"
        label="Email"
        InputLabelProps={{ shrink: true }}
        name="email"
        type="email"
        variant="outlined"
        required
        value={"hello"}
      />
      <TextField
        className="box-input color-3"
        label="Password"
        type="password"
        InputLabelProps={{ shrink: true }}
        name="password"
        variant="outlined"
        required
        value={"hello"}
      />
    </CardContent>
  );
};

export default class MemberLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginCard: true
    };
  }

  toggleForm = () => {
    this.setState({ loginCard: !this.state.loginCard });
  };

  render() {
    return (
      <div className="members-login-bg">
        <Card className="box">
          <div className="box-header bg-2 text-center">
            <i className="fas fa-user box-header-icon" />
            <Typography
              variant="h6"
              className="text-center"
              style={{ display: this.state.loginCard ? "block" : "none" }}
            >
              Login To Members Area
            </Typography>
            <Typography
              variant="h6"
              className="text-center"
              style={{ display: this.state.loginCard ? "none" : "block" }}
            >
              Create New Account
            </Typography>
          </div>
          {this.state.loginCard ? (
            <LoginForm toggleForm={this.toggleForm} />
          ) : (
            <SignupForm toggleForm={this.toggleForm} />
          )}
          <CardActions className="card-actions">
            <Button className="box-btn">Sign Up</Button>
            <div className="flex justify-content-between w-100">
              <a
                onClick={this.toggleForm}
                style={{ display: this.state.loginCard ? "block" : "none" }}
              >
                <small className="color-2">Create New account ?</small>
              </a>
              <a
                onClick={this.toggleForm}
                style={{ display: this.state.loginCard ? "none" : "block" }}
              >
                <small className="color-2">Already Have An Account ?</small>
              </a>
              <a>
                <small className="color-2">forget password?</small>
              </a>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}
