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
    return (
      <div className="story pop">
        <div className="ch-item">
          <h3>
            {this.props.story.title}
            <a
              onClick={() => {
                this.showStory(this.props.index + 1);
              }}
            >
              read the story
            </a>
          </h3>

          <div
            className="ch-info"
            style={{ backgroundImage: "url(" + this.props.story.imgs[0] + ")" }}
          />
          <div
            className="ch-thumb"
            style={{ backgroundImage: "url(" + this.props.story.imgs[0] + ")" }}
          />
        </div>
        <div className="story-details">
          <div className="read-more-close" onClick={this.closeStory}>
            <i className="fas fa-times" />
          </div>
          <img src={this.props.story.imgs[0]} alt="" />
          <h1 className="heading-theme-2">{this.props.story.title}</h1>
          <p className="p-theme-1">{this.props.story.text}</p>
        </div>
      </div>
    );
  }
}
