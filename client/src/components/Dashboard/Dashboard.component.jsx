import React, { Component } from "react";
import "./Dashboard.css";
import Project from "../Dashboard/Project/Project.component";
import { Route } from "react-router-dom";
import Sidebar from "../general-components/sidebar/sidebar";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.querySelector(".navbar").style.display = "none";
  }
  componentWillMount() {}

  render() {
    return (
      <div className="admin-dashboard">
        <Sidebar />
        <Route path="/dashboard/projects" component={Projects} />
      </div>
    );
  }
}
