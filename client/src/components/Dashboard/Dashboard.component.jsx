import React, { Component } from "react";
import "./Dashboard.css";
import { Route, Link } from "react-router-dom";
import Axios from "axios";
import AdminList from "../general-components/AdminList/AdminList.component";
import Sidebar from "../general-components/sidebar/sidebar";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".logo").style.display = "none";
  }
  componentWillUnmount() {
    document.querySelector(".navbar").style.display = "block";
    document.querySelector(".logo").style.display = "block";
  }
  componentWillMount() {
    Axios.get("/users/isadmin").then(res => {
      if (res.data === false) {
        this.props.history.push("admin");
      }
    });
  }

  render() {
    return (
      <div className="admin-dashboard fadeInFast">
        <Sidebar />
        <main>
          <h1>hello</h1>
        </main>
      </div>
    );
  }
}
