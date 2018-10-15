import React, { Component } from "react";
import "./Stories.css";
import ScrollMagic from "scrollmagic";
import { Link } from "react-router-dom";
import * as stories from "./stories-info";

class Stories extends Component {
  state = {
    videoURL: "/videos/AmbientWebDemo_06.mp4"
  };

  componentDidMount() {
    document.body.style.overflowY = "auto";
    var controller = new ScrollMagic.Controller();

    for (let i = 1; i < 16; i++) {
      new ScrollMagic.Scene({
        triggerElement: ".link" + i
      })
        .setClassToggle(".link" + i, "show" + i)
        .addTo(controller);
    }
  }

  onClickStory = e => {
    console.log(e.target);
  };

  goDown = () => {
    document.querySelector(".link10").scrollIntoView({
      behavior: "smooth"
    });
  };

  componentWillUnmount() {
    document.body.style.overflowY = "hidden";
  }
  render() {
    return (
      <div className="stories fadeInFast">
        <div className="header">
          <img src="/imgs/success.jpg" className="header-img" alt="" />
          <div className="header-text">
            <h1>Success Stories</h1>
            <a onClick={this.goDown} className="down-arrow">
              <img src="/imgs/arrow.png" className="down-arrow-img" alt="" />
            </a>
          </div>
        </div>

        <div className="up" />

        <ul className="stories-items">
          {stories.map((story, i) => (
            <li className="story-item">
              <Link to={"/stories/" + story.id} className={"links link" + ++i}>
                <span className="story-title">{story.title}</span>
              </Link>
            </li>
          ))}

          <li className="story-item">
            <Link to={"/stories/" + stories[4].id} className="link10 links">
              <span className="story-title">{stories[4].title}</span>
            </Link>
          </li>

          <li className="story-item">
            <Link to={"/stories/" + stories[4].id} className="link11 links">
              <span className="story-title">{stories[4].title}</span>
            </Link>
          </li>
          <li className="story-item">
            <Link to={"/stories/" + stories[4].id} className="link12 links">
              <span className="story-title">{stories[4].title}</span>
            </Link>
          </li>
          <li className="story-item">
            <Link to={"/stories/" + stories[4].id} className="link13 links">
              <span className="story-title">{stories[4].title}</span>
            </Link>
          </li>
          <li className="story-item">
            <Link to={"/stories/" + stories[4].id} className="link14 links">
              <span className="story-title">{stories[4].title}</span>
            </Link>
          </li>
          <li className="story-item">
            <Link to={"/stories/" + stories[4].id} className="link15 links">
              <span className="story-title">{stories[4].title}</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Stories;
