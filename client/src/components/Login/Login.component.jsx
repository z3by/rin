import React, { Component } from "react";
import "./Login.css";
import Axios from "axios";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    document.querySelector(".navbar").style.display = "none";
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _onSubmit = e => {
    e.preventDefault();
    const userInfo = this.state;
    Axios.post("/users/loginadmin", userInfo).then(res => {
      if (res.data === true) {
        this.props.history.push("/dashboard");
      } else {
        alert("user name or password is wrong");
      }
    });
  };

  render() {
    return (
      <div className="admin-login">
        <Paper className="admin-form-login">
          <img src="/imgs/admin.png" alt="" />
          <Typography variant="h6" className="text-center">
            Login as admin
          </Typography>
          <form onSubmit={this._onSubmit}>
            <TextField
              className="full-width-input"
              label="admin user name"
              InputLabelProps={{
                shrink: true
              }}
              name="username"
              variant="outlined"
              required
              value={this.state.username}
              onChange={this.onChange}
            />
            <TextField
              className="full-width-input"
              label="admin password"
              type="password"
              InputLabelProps={{
                shrink: true
              }}
              name="password"
              variant="outlined"
              required
              value={this.state.password}
              onChange={this.onChange}
            />
            <Button className="login-admin-btn" type="submit">
              Login
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}
