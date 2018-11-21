import React, { Component } from "react";
import "./Blog.css";
import IconButton from "@material-ui/core/IconButton";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 0
    };
  }

  scrollToTop = () => {
    document.querySelector(".library").scrollIntoView({
      behavior: "smooth"
    });
  };

  goDown = () => {
    document.querySelector(".container").scrollIntoView({
      behavior: "smooth"
    });
  };

  render() {
    return (
      <div
        className="blog fadeInFast"
        style={{
          overflowY: "scroll"
        }}
      >
        <header>
          <div className="banner-full">
            <h1>blog</h1>
            <div className="line" />
            <h3>read the RIN latest articles</h3>
            <div className="go-down" onClick={this.goDown}>
              <IconButton>
                <i className="fas fa-arrow-down color-2" />
              </IconButton>
            </div>
          </div>
        </header>
        <div className=" container ">
          <h1>hello from blog</h1>
        </div>
      </div>
    );
  }
}
