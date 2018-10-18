import React, { Component } from "react";
import "./Login.css";

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
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.props.history.push("dashboard");
    } else {
      window.alert("username or password is wrong");
    }
  };

  render() {
    return (
      <div className="admin-login fadeInFast">
        <div className="loginbox">
          <img src="/imgs/login.png" alt="login icon" className="avatar" />
          <h1 className="login-title">Admin Dashboard</h1>
          <form method="POST">
            <label>Username</label>
            <input type="text" onChange={this.onChange} name="username" />
            <label>Password</label>
            <input type="password" onChange={this.onChange} name="password" />
            <button onClick={this._onSubmit} className="login">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
