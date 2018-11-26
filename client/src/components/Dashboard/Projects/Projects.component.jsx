import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import NewProject from "./NewProject/NewProject.component";
import ProjectsList from "./ProjectsList/ProjectsList.component";
import ProjectInfo from "./ProjectInfo/ProjectInfo.component";
import UpdateProject from "./UpdateProject/UpdateProject.component";
import "./Projects.css";
import Axios from "axios";
import ProjectRequests from "./ProjectRequest/ProjectRequest.component";
import ProjectsSearchResults from "./ProjectsSearchResults/ProjectsSearchResults.component";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }

  componentDidMount() {
    this.checkRequests();
  }

  // check if there is any request for projects
  checkRequests = () => {
    Axios.get("/api/requests").then(res => {
      this.setState({
        requests: res.data
      });
    });
  };

  searchProjects = (e) => {
    if (e.key === "Enter") {
      //a condition to avoid empty search input
      if (e.target.value) {
        const input = e.target.value;
        this.props.history.push(`/dashboard/projects/search/${input}`);
      };
    }
  }


  render() {
    return (
      <div className="projects-dashboard fadeInFast">
        <nav className="nav-up">
          <Link to="/dashboard/projects/add">
            <i className="fas fa-plus" />
            <span>New Project</span>
          </Link>

          <Link to="/dashboard/projects/requests">
            <i className="fas fa-inbox" />
            <span
              className="requests-notification"
              style={{
                opacity: this.state.requests.length ? "1" : "0"
              }}
            />
            <span>Project Requests</span>
          </Link>
          <div className="search-group">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onKeyUp={this.searchProjects}
            />
            <i className="fas fa-search" />
          </div>
        </nav>
        <main>
          <Route path={"/dashboard/projects/add"} component={NewProject} />
          <Route
            path={"/dashboard/projects/requests"}
            render={() => {
              return (
                <ProjectRequests
                  onRequestFinalized={() => {
                    this.checkRequests();
                  }}
                />
              );
            }}
          />
          <Route
            exact
            path={"/dashboard/projects/list"}
            component={ProjectsList}
          />
          <Route
            exact
            path={"/dashboard/projects/list/:id"}
            component={ProjectInfo}
          />
          <Route
            exact
            path={"/dashboard/projects/list/updateproject/:id"}
            component={UpdateProject}
          />
          <Route
            exact
            path={"/dashboard/projects/search/:option"}
            component={ProjectsSearchResults}
          />
        </main>
      </div>
    );
  }
}
