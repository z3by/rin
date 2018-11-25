import React, { Component } from "react";
import "./Library.css";
import IconButton from "@material-ui/core/IconButton";
import { Route } from "react-router-dom";
import Books from "./Books/Books.component";
import Links from "./Links/Links.component";
import Researches from "./Researches/Researches.component";

export default class Library extends Component {
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
        className="library fadeInFast"
        style={{
          overflowY: "scroll"
        }}
      >
        <header>
          <div className="banner-full">
            <h1>library</h1>
            <div className="line" />
            <h3>dig deeply and read more about impact investment</h3>
            <ul className="header-nav">
              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/library/books");
                  }}
                >
                  <h5 className="upper">books</h5>
                  <i className="fas fa-book-open" />
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/library/links");
                  }}
                >
                  <h5 className="upper">useful links</h5>
                  <i className="fas fa-link" />
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/library/reaserches");
                  }}
                >
                  <h5 className="upper">reaserches</h5>
                  <i className="fas fa-file-contract" />
                </a>
              </li>
            </ul>
            <div className="go-down" onClick={this.goDown}>
              <IconButton>
                <i className="fas fa-arrow-down color-2" />
              </IconButton>
            </div>
          </div>
        </header>
        <div className="container">
          <div id="scroll-sign" />

          <Route path="/library/books" component={Books} />
          <Route path="/library/links" component={Links} />
          <Route path="/library/reaserches" component={Researches} />
        </div>
      </div>
    );
  }
}
