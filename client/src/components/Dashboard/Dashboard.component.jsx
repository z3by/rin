import React, { Component } from "react";
import "./Dashboard.css";
import Projects from "../Dashboard/Projects/Projects.component";
import Stories from "./Stories/Stories.component";
import { Route } from "react-router-dom";
import Sidebar from "../general-components/sidebar/sidebar";
import Axios from "axios";

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
      <div className="admin-dashboard">
        <Sidebar />
        <main>
          <Route path="/dashboard/projects" component={Projects} />
          <Route path="/dashboard/stories" component={Stories} />
        </main>
      </div>
    );
  }
}
