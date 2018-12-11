import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Story.css";

export default class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="story bub">
        <div
          className="story-item"
          style={{ backgroundImage: `url(${this.props.story.img})` }}
        >
          <Link
            className="link-read-more"
            to={`/stories/${this.props.story.id}`}
          >
            <p> Read Story </p>
          </Link>
        </div>
        <p className="center">{this.props.story.title}</p>
      </div>
    );
  }
}
