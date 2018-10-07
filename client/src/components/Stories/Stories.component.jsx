import React, { Component } from "react";
import "./Stories.css";
import ScrollMagic from "scrollmagic";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import * as particleOpt from "./practiles-options";
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
    // document.querySelector(".link3").scrollIntoView({
    //   behavior: "smooth"
    // });

    window.scroll({
      top: 400,
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
          {/* <video loop autoPlay muted>
            <source src={this.state.videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img src="/imgs/success.jpg" className="header-img" alt="" />
          <div className="header-text">
            <h1>Success Stories</h1>
            <a onClick={this.goDown} className="down-arrow">
              <img src="/imgs/arrow.png" className="down-arrow-img" alt="" />
            </a>
          </div>
        </div>

        <div className="particles-js">
          <Particles params={particleOpt} />
        </div>

        {/* <div className="vertical-line" id="id1" /> */}

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

        <div className="down" />
      </div>
    );
  }
}

export default Stories;
