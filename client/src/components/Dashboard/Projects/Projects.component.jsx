import React, { Component } from "react";
import "Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <nav className="nav-up">
          <ul>
            <li>
              <Link to={"/dashboard/projects/add"}>add project</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
