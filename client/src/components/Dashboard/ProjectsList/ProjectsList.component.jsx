import React, { Component } from "react";
import "./ProjectsList.css";

export default class ProjectsList extends Component {
  render() {
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
          <tbody>
            <tr>
              <td>Google</td>
              <td>9518</td>
              <td>6369</td>
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
          </tbody>
        </table>
      </div>
    );
  }
}
