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

  // navigate to specific route
  navigateTO = route => {
    this.props.history.push(route);
    document.body.scrollBy({
      top: window.innerHeight - document.body.scrollTop,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <div className="news fadeInFast">
        <header>
          <div className="banner-full">
            <h1>news</h1>
            <div className="line" />
            <h3>
              RIN press and other latest resources around refugee investment
            </h3>
            <ul className="header-nav">
              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/news");
                  }}
                >
                  <i className="fas fa-newspaper" />
                  <h5 className="upper">Press</h5>
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/news/researches");
                  }}
                >
                  <i className="fas fa-file-contract" />
                  <h5 className="upper">researches</h5>
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
          <Route path="/news" exact component={Links} />
          <Route path="/news/researches" component={Researches} />
        </div>
      </div>
    );
  }
}
