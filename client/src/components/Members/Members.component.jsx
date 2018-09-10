import React, { Component } from "react";
import "./Members.css";

export default class Members extends Component {
  render() {
    return (
      // <div className="members">
      //   <h3 className="title">Login</h3>
      //   <form className="form">
      //     <label htmlFor="username-input">Username</label>
      //     <input type="text" id="username-input" />
      //     <label htmlFor="password-input">Password</label>
      //     <input type="password" id="password-input" />
      //   </form>
      // </div>
      <div className="partners1">
        <img className="i1" src="/imgs/img1.jpg" />
        <img className="i2" src="/imgs/img2.jpg" />
        <img className="i3" src="/imgs/img3.jpg" />
        <img className="i4" src="/imgs/bg.png" />
      </div>
    );
  }
}
