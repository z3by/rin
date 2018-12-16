import React, { Component } from "react";
import "./News.css";
import IconButton from "@material-ui/core/IconButton";
import { Route } from "react-router-dom";
import Links from "./Links/Links.component";
import Researches from "./Researches/Researches.component";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 0
    };
  }

  // handle the down arrow btn
  scrollToTop = () => {
    document.querySelector(".header").scrollIntoView({
      behavior: "smooth"
    });
  };

  goDown = () => {
    document.body.scrollBy({
      top: window.innerHeight - document.body.scrollTop,
      behavior: "smooth"
    });
  };

  // navigate to specifec route
  navigateTO = route => {
    this.props.history.push(route);
    setTimeout(() => {
      document.querySelector("#scroll-sign").scrollIntoView({
        behavior: "smooth"
      });
    });
  };

  render() {
    return (
      <div
        className="news fadeInFast"
        style={{
          overflowY: "scroll"
        }}
      >
        <header>
          <div className="banner-full">
            <h1>news</h1>
            <div className="line" />
            <h3>dig deeply and read more about impact investment</h3>
            <ul className="header-nav">
              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/news");
                  }}
                >
                  <h5 className="upper">useful links</h5>
                  <i className="fas fa-link" />
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/news/reaserches");
                  }}
                >
                  <h5 className="upper">reaserches</h5>
                  <i className="fas fa-file-contract" />
                </a>
              </li>
            </ul>
            <div className="go-down" onClick={this.goDown}>
              <IconButton>
                <i className="fas fa-arrow-down color-1" />
              </IconButton>
            </div>
          </div>
        </header>
        <div className="container">
          <div id="scroll-sign" />

          <Route path="/news" exact component={Links} />
          <Route path="/news/reaserches" component={Researches} />
        </div>
      </div>
    );
  }
}
