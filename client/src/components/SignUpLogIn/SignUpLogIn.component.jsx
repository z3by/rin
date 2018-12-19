import React, { Component } from "react";
import axios from "axios";
import "./SignUpLogIn.css";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default class SignUpLogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roles: ["Investor", "Entrepreneur", "Humanitarian Community"],
      userInfo: {
        firstName: "",
        lastName: "",
        organizationName: "",
        userRole: "",
        email: "",
        password: "",
        password2: ""
      },
      errors: []
    };
  }

  // display the proper form for the user (login || signup)
  toggleClassBounce = () => {
    if (
      document
        .querySelector(".user_options-forms")
        .classList.contains("bounceRight")
    ) {
      document
        .querySelector(".user_options-forms")
        .classList.remove("bounceRight");
      document.querySelector(".user_options-forms").classList.add("bounceLeft");
    } else {
      document
        .querySelector(".user_options-forms")
        .classList.remove("bounceLeft");
      document
        .querySelector(".user_options-forms")
        .classList.add("bounceRight");
    }
  };

  onChange = e => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  addUser = e => {
    e.preventDefault();

    let { userInfo } = this.state;

    axios
      .post("/users/register", userInfo)
      .then(res => {
        this.toggleClassBounce();
      })
      .catch(error => {
        const errors = [];
        if (typeof error.response.data === "object") {
          for (let i in error.response.data) {
            errors.push(<li key={i}>{error.response.data[i]}</li>);
          }
        }
        this.setState({
          errors: errors
        });
      });
  };

  login = e => {
    e.preventDefault();

    let userData = {
      email: this.state.userInfo.email,
      password: this.state.userInfo.password
    };

    axios
      .post("/users/login", userData)
      .then(res => {
        const token = res.data.token;
        window.localStorage.setItem("jwttoken", token);
        this.props.history.push("members");
      })
      .catch(error => {
        console.log(error);
      });
  };

  toggleErrors = () => {
    this.setState({ errors: [] });
  };

  render() {
    let roles = this.state.roles.map((role, i) => {
      return (
        <MenuItem value={role} key={i}>
          {" "}
          {role}
        </MenuItem>
      );
    });

    return (
      <div className="user">
        <div
          className="errors"
          style={{ display: this.state.errors.length ? "block" : "none" }}
        >
          <h3 className="heading-theme-2">please try again</h3>
          <ul>{this.state.errors}</ul>
          <button className="errors-dismiss" onClick={this.toggleErrors}>
            OK
          </button>
        </div>
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options">
              <h2 className="user-title">Don't have an account?</h2>
              <p className="user-text">
                Create a member account and enjoy our exclusive services
              </p>
              <button
                className="user-signup-login"
                onClick={this.toggleClassBounce}
              >
                Sign up
              </button>
            </div>

            <div className="user_options">
              <h2 className="user-title">Have an account?</h2>
              <p className="user-text">Login dierctly to your account</p>
              <button
                className="user-signup-login"
                onClick={this.toggleClassBounce}
              >
                Login
              </button>
            </div>
          </div>
          {/******************** login form  *******************************/}
          <div className="user_options-forms bounceRight">
            <div className="user_forms-login">
              <Typography variant="h2" className="forms_title">
                Login
              </Typography>
              <FormControl className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <TextField
                      label="Email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      onChange={this.onChange}
                      value={this.state.email}
                      placeholder="Email"
                      margin="normal"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <TextField
                      label="Password"
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      onChange={this.onChange}
                      value={this.state.password}
                      margin="normal"
                      required
                    />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <Button
                    variant="contained"
                    onClick={this.login}
                    style={{ color: "var(--color-2)" }}
                  >
                    Login
                  </Button>
                </div>
              </FormControl>
            </div>

            {/******************** signup form  *******************************/}
            <div className="user_forms-signup">
              <Typography variant="h2" className="forms_title">
                Signup
              </Typography>
              <FormControl className="forms_form" onSubmit={this.addUser}>
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <TextField
                      label="First Name"
                      name="firstName"
                      autoComplete="firstName"
                      onChange={this.onChange}
                      value={this.state.firstName}
                      margin="normal"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <TextField
                      label="Last Name"
                      name="lastName"
                      autoComplete="lastName"
                      onChange={this.onChange}
                      value={this.state.lastName}
                      margin="normal"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <TextField
                      label="Organization Name"
                      name="organizationName"
                      autoComplete="organizationName"
                      onChange={this.onChange}
                      value={this.state.organizationName}
                      margin="normal"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel htmlFor="role-select">select role</InputLabel>
                      <Select
                        value={this.state.userInfo.userRole}
                        onChange={this.onChange}
                        inputProps={{
                          name: "userRole",
                          id: "role-select",
                          value: this.state.userInfo.userRole
                        }}
                      >
                        {roles}
                      </Select>
                    </FormControl>
                  </div>
                  <div className="forms_field">
                    <TextField
                      label="Email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      onChange={this.onChange}
                      value={this.state.email}
                      placeholder="Email"
                      margin="normal"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <TextField
                      label="Password"
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      onChange={this.onChange}
                      value={this.state.password}
                      margin="normal"
                      required
                    />
                  </div>
                  <div className="forms_field">
                    <TextField
                      label="Confirm Password"
                      type="password"
                      name="password2"
                      autoComplete="current-password"
                      onChange={this.onChange}
                      value={this.state.password}
                      margin="normal"
                      required
                    />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <Button
                    variant="contained"
                    onClick={this.addUser}
                    style={{ color: "var(--color-2)" }}
                  >
                    Signup
                  </Button>
                </div>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
