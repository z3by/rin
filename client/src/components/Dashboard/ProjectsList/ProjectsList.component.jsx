import React, { Component } from "react";
import "./ProjectsList.css";
import * as projectsData from "../../Map/projects-data.json";

export default class ProjectsList extends Component {
  render() {
    const projects = projectsData.map((project, key) => {
      return (
        <tr>
          <td>{key}</td>
          <td>{project.title}</td>
          <td>{project.organizationName}</td>
          <td className="project-options">
            <a>
              <i className="far fa-eye" /> show
            </a>
            <a>
              <i className="fas fa-edit" />
              update
            </a>
            <a>
              <i className="fas fa-trash-alt" /> delete
            </a>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <table class="projects-list-table">
          <thead>
            <tr>
              <th>
                <h1>Project ID</h1>
              </th>
              <th>
                <h1>Project Name</h1>
              </th>
              <th>
                <h1>Organization Name</h1>
              </th>
              <th>
                <h1>Options</h1>
              </th>
            </tr>
          </thead>
          <tbody>{projects}</tbody>
        </table>
      </div>
    );
  }
}
