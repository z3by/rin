import React, { Component } from "react";
import "./Members.css";

export default class Members extends Component {
  render() {
    return (
      <div className="members">
        <h3 className="title">Login</h3>
        <form className="form">
          <label htmlFor="username-input">Username</label>
          <input type="text" id="username-input" />
          <label htmlFor="password-input">Password</label>
          <input type="password" id="password-input" />
        </form>
      </div>
    );
  }
}
