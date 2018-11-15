import React, { Component } from "react";
import "./Members.css";
import Axios from "axios";

export default class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false
    };
  }
  componentDidMount() {
    this.checkAuth();
  }

  // log out the current member
  onLogOut = () => {
    window.localStorage.removeItem("jwttoken");
    this.setState(
      {
        loggedin: false
      },
      () => {
        this.checkAuth();
      }
    );
  };

  // check if the user jwt is valid
  checkAuth = () => {
    const token = window.localStorage.getItem("jwttoken");
    if (this.state.loggedin === "false" || !token) {
      this.props.history.push("login");
    } else {
      Axios.post("/users/islogged", { token: token }).then(res => {
        if (res.data.status === "valid") {
          this.setState({
            loggedin: true
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="members fadeInFast">
        <button className="logout" onClick={this.onLogOut}>
          log out
        </button>
      </div>
    );
  }
}
