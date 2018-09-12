import React, { Component } from "react";
import "./Members.css";

export default class Members extends Component {
  render() {
    return (
      <div className="members">
        <div className="loginbox">
          <img src="/imgs/login.png" alt="login icon" className="avatar" />
          <h1 className="login-title">Login</h1>
          <form>
            <label>Username</label>
            <input type="text" placeholder="Enter Username" />
            <label>Password</label>
            <input type="password" placeholder="Enter Password" />
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
