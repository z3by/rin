import React, { Component } from "react";
import "./Dashboard.css";
import Projects from "../Dashboard/Projects/Projects.component";
import Stories from "./Stories/Stories.component";
import { Route, Link } from "react-router-dom";
import Sidebar from "../general-components/sidebar/sidebar";
import Axios from "axios";
import Users from "./Users/Users.component";
import Articles from "./Articles/Articles.component";
import Library from "./Library/Library.component";
import AdminList from "../general-components/AdminList/AdminList.component";

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
        <nav className="nav-up main-nav">
          <Link to="/dashboard">
            <i className="fas fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
          <Link to="/">
            <i className="fas fa-home" />
            <span>Home</span>
          </Link>
        </nav>
        <main>
          <AdminList itemName="project" />
          <Route path="/dashboard/projects" component={Projects} />
          <Route path="/dashboard/Articles" component={Articles} />
          <Route path="/dashboard/stories" component={Stories} />
          <Route path="/dashboard/users" component={Users} />
          <Route path="/dashboard/library" component={Library} />
        </main>
      </div>
    );
  }
}
