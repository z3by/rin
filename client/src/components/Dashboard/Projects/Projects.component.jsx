import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import NewProject from "../../NewProject/NewProject.component";
import ProjectsList from "../ProjectsList/ProjectsList.component";
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

            <li>
              <Link to={"/dashboard/projects/list"}>show projects</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Route path={"/dashboard/projects/add"} component={NewProject} />
          <Route path={"/dashboard/projects/list"} component={ProjectsList} />
        </main>
      </div>
    );
  }
}
