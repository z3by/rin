import React, { Component } from "react";
import "./Members.css";

export default class Members extends Component {
  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    let loggedin = false;
    if (!loggedin) {
      this.props.history.push("login");
    }
  };

  render() {
    return (
      <div className="members fadeInFast">
        <h1>hello you are in the members page</h1>
      </div>
    );
  }
}
