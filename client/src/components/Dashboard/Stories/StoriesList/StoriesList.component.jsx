import React, { Component } from "react";
import "./StoriesList.css";
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
          itemName="story"
          pluralName="stories"
          wantedFields={["id", "title", "pre_description"]}
        />
      </Paper>
    );
  }
}
