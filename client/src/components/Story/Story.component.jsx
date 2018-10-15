import React, { Component } from "react";
import "./Story.css";

export default class Story extends Component {
  state = {};

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  render() {
    return (
      <div className="story">
        <p />
      </div>
    );
  }
}
