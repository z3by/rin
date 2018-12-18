import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Story.css";
import { Typography } from "@material-ui/core";

export default class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div
        className="story bub"
        style={{ backgroundImage: `url(${this.props.story.img})` }}
      >
        <div className="story-item">
          <Link
            className="link-read-more"
            to={`/stories/${this.props.story.id}`}
          >
            <Typography variant="h6" className="color-1">
              Read Story
            </Typography>
          </Link>
        </div>
        <p className="center">{this.props.story.title}</p>
      </div>
    );
  }
}
