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
        <h1>hello you are in the members page</h1>
      </div>
    );
  }
}
