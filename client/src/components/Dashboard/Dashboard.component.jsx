import React, { Component } from "react";
import "./Dashboard.css";
import { Route, Link } from "react-router-dom";
import Axios from "axios";
import AdminList from "../general-components/AdminList/AdminList.component";
import Sidebar from "../general-components/sidebar/sidebar";
import Navbar from "../general-components/navbar/Navbar";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggled: false
    };
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

  toggleDrawer = () => {
    this.setState({
      sidebarToggled: !this.state.sidebarToggled
    });
  };

  render() {
    return (
      <div className="admin-dashboard fadeInFast">
        <Sidebar
          toggleDrawer={this.toggleDrawer}
          toggled={this.state.sidebarToggled}
        />
        <Navbar toggleDrawer={this.toggleDrawer} />
        <main>
          <Route
            path="/dashboard/projects"
            render={() => {
              return (
                <AdminList
                  itemName="project"
                  pluralName="projects"
                  controls={true}
                  wantedFields={[
                    "id",
                    "name",
                    "organization",
                    "sector",
                    "investmentSize"
                  ]}
                />
              );
            }}
          />
          <Route
            path="/dashboard/stories"
            render={() => {
              return (
                <AdminList
                  itemName="story"
                  pluralName="stories"
                  controls={true}
                  wantedFields={["id", "buisness", "buisnessDescription"]}
                />
              );
            }}
          />
          <Route
            path="/dashboard/users"
            render={() => {
              return (
                <AdminList
                  itemName="member"
                  pluralName="members"
                  controls={false}
                  wantedFields={[
                    "id",
                    "firstName",
                    "lastName",
                    "userRole",
                    "email",
                    "oraganizationName"
                  ]}
                />
              );
            }}
          />
          <Route
            path="/dashboard/blog"
            render={() => {
              return (
                <AdminList
                  itemName="article"
                  pluralName="articles"
                  controls={true}
                  wantedFields={["id", "title", "subtitle"]}
                />
              );
            }}
          />
        </main>
      </div>
    );
  }
}
