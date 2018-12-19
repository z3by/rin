import React, { Component } from "react";
import LinkList from "./LinkList.component";
import "./links.css";
import { Typography } from "@material-ui/core";

export default class Links extends Component {
  render() {
    return (
      <div>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          News
        </Typography>
        <Typography variant="h5" style={{ marginBottom: 40 }}>
          The latest news from the RIN
        </Typography>
        <LinkList />
      </div>
    );
  }
}
