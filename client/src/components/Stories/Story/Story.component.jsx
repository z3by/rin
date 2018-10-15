import React, { Component } from "react";
import "./Story.css";

export default class Story extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  render() {
    return (
      <div className="story">
        <div class="ch-item">
          <h3>
            {this.props.story.title}
            <a href="">read the story</a>
          </h3>

          <div
            class="ch-info"
            style={{ backgroundImage: "url(" + this.props.story.img + ")" }}
          />
          <div
            class="ch-thumb"
            style={{ backgroundImage: "url(" + this.props.story.img + ")" }}
          />
        </div>
      </div>
    );
  }
}
