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
import SocialLinks from "../Landing/socialLinks.component";
import Logo from "../Landing/Logo.component";

const SignupForm = props => {
  return (
    <CardContent className="box-form">
      <TextField
        onChange={props.handleOnChange}
        className="box-input color-3"
        label="Email"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        name="email"
        type="email"
        required
        value={props.userInfo.email}
      />
      <TextField
        onChange={props.handleOnChange}
        className="box-input color-3"
        label="First Name"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        name="firstName"
        type="text"
        required
        value={props.userInfo.firstName}
      />
      <TextField
        onChange={props.handleOnChange}
        className="box-input color-3"
        label="Last Name"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        name="lastName"
        type="text"
        value={props.userInfo.lastName}
        required
      />
      <TextField
        onChange={props.handleOnChange}
        className="box-input color-3"
        label="Organization Name"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        name="organizationName"
        type="text"
        required
        value={props.userInfo.organizationName}
      />
      <TextField
        onChange={props.handleOnChange}
        className="box-input color-3"
        label="Password"
        type="password"
        InputLabelProps={{ shrink: true }}
        name="password"
        variant="outlined"
        required
        value={props.userInfo.password}
      />
      <TextField
        onChange={props.handleOnChange}
        className="box-input color-3"
        label="Confirm Password"
        type="password"
        InputLabelProps={{ shrink: true }}
        name="password2"
        variant="outlined"
        required
        value={props.userInfo.password2}
      />
      <FormControl className="box-input">
        <InputLabel htmlFor="role">User Role</InputLabel>
        <Select
          value={props.userInfo.userRole}
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
        onChange={props.handleOnChange}
        className="box-input color-3"
        label="Email"
        InputLabelProps={{ shrink: true }}
        name="email"
        type="email"
        variant="outlined"
        required
        value={props.userInfo.email}
      />
      <TextField
        onChange={props.handleOnChange}
        className="box-input color-3"
        label="Password"
        type="password"
        InputLabelProps={{ shrink: true }}
        name="password"
        variant="outlined"
        required
        value={props.userInfo.password}
      />
    </CardContent>
  );
};

export default class MemberLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginCard: true,
      userInfo: {}
    };
  }


  handleLogin = () => { 
    console.log(this.state.userInfo);
  }


  handleSingUp = () => { 
    console.log(this.state.userInfo);    
  }
  toggleForm = () => {
    this.setState({ loginCard: !this.state.loginCard });
  };

  handleChange = e => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="members-login">
        <div className="bg-members" />
        <SocialLinks />
        <Logo />
        <Card className="box">
          <div className="box-header text-center">
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
            <LoginForm
              handleOnChange={this.handleChange}
              userInfo={this.state.userInfo}
              toggleForm={this.toggleForm}
            />
          ) : (
            <SignupForm
              handleOnChange={this.handleChange}
              userInfo={this.state.userInfo}
              toggleForm={this.toggleForm}
            />
          )}
          <CardActions className="card-actions">
            {this.state.loginCard ? (
              <Button className="box-btn" onClick={this.handleLogin}>Login</Button>
            ) : (
              <Button className="box-btn" onClick={this.handleSingUp}>Sign Up</Button>
            )}
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
