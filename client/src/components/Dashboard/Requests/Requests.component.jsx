import React, { Component } from "react";

import RequestList from "./RequestList.component";
import "./requests.css";

export default class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectRequests: [],
      articleRequests: []
    };
  }

  render() {
    return (
      <div>
        <RequestList
          handleAccept={this.handleAccept}
          requests={this.props.projectRequests}
          itemName={"project"}
        />
      </div>
    );
  }
}
