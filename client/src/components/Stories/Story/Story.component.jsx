import React, { Component } from "react";
import "./Story.css";

export default class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  showStory = id => {
    document
      .querySelector(".story:nth-child(" + id + ")")
      .classList.add("full-story");
  };

  closeStory = () => {
    document.querySelector(".full-story").classList.remove("full-story");
  };

  render() {
    console.log(this.props);

    return (
      <div className="story">
        <div className="story-item" style={{ backgroundImage: `url(${this.props.story.imgs[0]})` }}>
        </div>
      </div>
    );
  }
}
