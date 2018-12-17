import React, { Component } from "react";
import "./Dashboard.css";
import { Route } from "react-router-dom";
import Axios from "axios";
import AdminList from "../general-components/AdminList/AdminList.component";
import Sidebar from "../general-components/sidebar/sidebar";
import Navbar from "../general-components/navbar/Navbar";
import StoryForm from "./StoryForm/StoryForm.component";
import ProjectForm from "./ProjectForm/ProjectForm.component";
import ArticleForm from "./ArticleForm/ArticleForm.component";
import ProjectInfo from "./ProjectInfo/ProjectInfo.component";
import StoryInfo from "./StoryInfo/StoryInfo.component";
import ArticleInfo from "./ArticleInfo/ArticleInfo.component";
import Requests from "./Requests/Requests.component";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggled: false,
      requestsCount: 0,
      requests: []
    };
  }

  componentDidMount() {
    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".logo").style.display = "none";
    this.fetchRequests();
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

  fetchRequests = () => {
    Axios.get("/api/requests").then(result => {
      this.setState({
        requestsCount: result.data.count,
        requests: result.data.rows
      });
    });
  };

  render() {
    return (
      <div className="admin-dashboard fadeInFast">
        <Sidebar
          toggleDrawer={this.toggleDrawer}
          toggled={this.state.sidebarToggled}
          fetchRequests={this.fetchRequests}
        />
        <Navbar
          {...this.props}
          toggleDrawer={this.toggleDrawer}
          requestsCount={this.state.requestsCount}
        />
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
                    "investmentSize"
                  ]}
                />
              );
            }}
          />
          <Route
            path="/dashboard/requests"
            render={() => (
              <Requests
                {...this.props}
                requests={this.state.requests}
                fetchRequests={this.fetchRequests}
              />
            )}
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
            path="/dashboard/articles"
            exact
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
          <Route path="/dashboard/articles/:id" component={ArticleInfo} />
          <Route path="/dashboard/addarticle" component={ArticleForm} />
          <Route path="/dashboard/updatearticle/:id" component={ArticleForm} />
        </main>
      </div>
    );
  }
}
