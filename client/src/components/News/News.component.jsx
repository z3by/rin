import React, { Component } from "react";
import "./News.css";
import IconButton from "@material-ui/core/IconButton";
import Links from "./Links/Links.component";

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
            <div className="go-down" onClick={this.goDown}>
              <IconButton>
                <i className="fas fa-arrow-down color-1" />
              </IconButton>
            </div>
          </div>
        </header>
        <div className="container">
          <Links />
        </div>
      </div>
    );
  }
}
