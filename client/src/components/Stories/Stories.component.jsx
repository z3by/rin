import React, { Component } from "react";
import "./Stories.css";
import * as stories from "./stories-info";
import Story from "./Story/Story.component";

class Stories extends Component {
  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  // handle the down arrow btn
  goTop = () => {
    document.querySelector(".go-down").scrollIntoView({
      behavior: "smooth"
    });
  };

  render() {
    //map the stories
    const storiesInfo = stories.map((story, id) => {
      return <Story story={story} key={id} />;
    });
    return (
      <div className="stories fadeInFast">
        <div className="header">
          <div className="header-text">
            <h1 className="color-1">Success Stories</h1>
          </div>
        </div>

        <div className="story-items container">{[storiesInfo]}</div>
        <div className="back-to-top" onClick={this.goTop}>
          <i className="fas fa-arrow-circle-up" />
        </div>
      </div>
    );
  }
}

export default Stories;
