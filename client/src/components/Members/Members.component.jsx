import React, { Component } from "react";
import "./Members.css";

export default class Members extends Component {
  render() {
    return (
      <div className="members fadeInFast">
        <div className="loginbox">
          <img src="/imgs/login.png" alt="login icon" className="avatar" />
          <h1 className="login-title">Login</h1>
          <form>
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <input type="submit" value="Login" />
            <a>Lost your password?</a>
            <br />
            <a>Don't have an account?</a>
          </form>
        </div>
      </div>
    );
  }
}
