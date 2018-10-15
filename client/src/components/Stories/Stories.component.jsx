import React, { Component } from "react";
import "./Stories.css";
import * as stories from "./stories-info";

class Stories extends Component {
  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  // handle the down arrow btn
  goDown = () => {};

  // handle the down arrow btn
  goTop = () => {};

  render() {
    return (
      <div className="stories fadeInFast">
        <div className="header">
          <img src="/imgs/success.jpg" className="header-img" alt="" />
          <div className="header-text">
            <h1 className="color-1">Success Stories</h1>

            <div className="go-down" onClick={this.goDown}>
              <i className="fas fa-arrow-circle-down" />
            </div>
          </div>
        </div>

        <div className="story-items">
          <div className="story" />
        </div>
        <div className="back-to-top" onClick={this.goTop}>
          <i className="fas fa-arrow-circle-up" />
        </div>
      </div>
    );
  }
}

export default Stories;
