import React, { Component } from "react";
import "./UsersList.css";
import AdminList from "../../../general-components/AdminList/AdminList.component";

import Paper from "@material-ui/core/Paper";

export default class StoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  render() {
    return (
      <Paper className="StoriesPages fadeInFast">
        <AdminList
          itemName="member"
          pluralName="members"
          controls={false}
          wantedFields={[
            "id",
            "first_name",
            "last_name",
            "email",
            "user_role",
            "organization_name"
          ]}
        />
      </Paper>
    );
  }
}
