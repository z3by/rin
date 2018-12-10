import React, { Component } from "react";
import "./Dashboard.css";
import { Route, Link } from "react-router-dom";
import Axios from "axios";
import AdminList from "../general-components/AdminList/AdminList.component";
import Sidebar from "../general-components/sidebar/sidebar";
import Navbar from "../general-components/navbar/Navbar";
import StoryForm from "./StoryForm/StoryForm.component";
import ProjectForm from "./ProjectForm/ProjectForm.component";
import ArticleForm from "./ArticleForm/ArticleForm.component";
import ProjectInfo from "./ProjectInfo/ProjectInfo.component";
import StoryInfo from "./StoryInfo/StoryInfo.component";

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
    document.body.style.overflowY = "scroll";
  }
  componentWillUnmount() {
    document.querySelector(".navbar").style.display = "block";
    document.querySelector(".logo").style.display = "block";
  }
  componentWillMount() {
    Axios.get("/users/isadmin").then(res => {
      if (res.data === false) {
        this.props.history.push("/admin");
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
          <Route path="/dashboard/projects/:id" component={ProjectInfo} />
          <Route
            path="/dashboard/projects"
            exact
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
          <Route path="/dashboard/addproject" component={ProjectForm} />
          <Route path="/dashboard/updateproject/:id" component={ProjectForm} />

          <Route
            path="/dashboard/stories"
            exact
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
          <Route path="/dashboard/stories/:id" component={StoryInfo} />
          <Route path="/dashboard/addstory" component={StoryForm} />
          <Route path="/dashboard/updatestory/:id" component={StoryForm} />

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
          <Route path="/dashboard/addarticle" component={ArticleForm} />
        </main>
      </div>
    );
  }
}
