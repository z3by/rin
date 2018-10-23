import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import NewProject from "../NewProject/NewProject.component";
import ProjectsList from "../ProjectsList/ProjectsList.component";
import ProjectInfo from "../ProjectInfo/ProjectInfo.component";
import "./Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-dashboard">
        <nav className="nav-up">
          <ul>
            <li>
              <Link to={"/dashboard/projects/add"}>add project</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Route path={"/dashboard/projects/add"} component={NewProject} />
          <Route path={"/dashboard/projects/list"} component={ProjectsList} />
          <Route
            path={"/dashboard/projects/list/:id"}
            component={ProjectInfo}
          />
        </main>
      </div>
    );
  }
}
