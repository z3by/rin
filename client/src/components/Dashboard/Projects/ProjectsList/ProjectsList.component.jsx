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
          wantedFields={[
            "id",
            "title",
            "type",
            "start_date",
            "organization_name",
            "project_description"
          ]}
        />
      </Paper>
    );
  }
}
