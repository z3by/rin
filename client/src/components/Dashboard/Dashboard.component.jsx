import React, { Component } from "react";
import "./Dashboard.css";
import NewProject from "../NewProject/NewProject.component";
import { Route } from "react-router-dom";

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
        <p>admin</p>
        <Route path="/dashboard/newproject" component={NewProject} />
      </div>
    );
  }
}
