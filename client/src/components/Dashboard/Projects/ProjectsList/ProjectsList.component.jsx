import React, { Component } from "react";
import "./ProjectsList.css";
import AdminList from "../../../general-components/AdminList/AdminList.component";

import Paper from "@material-ui/core/Paper";

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  render() {
    return (
      <Paper className="projectsPages fadeInFast">
        <AdminList
          itemName="project"
          pluralName="projects"
          controls={true}
          wantedFields={[
            "id",
            "name",
            "organization",
            "sector",
            "investmentSize",
            "year"
          ]}
        />
      </Paper>
    );
  }
}
