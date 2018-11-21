import React, { Component } from "react";
import "./Data.css";
import IconButton from "@material-ui/core/IconButton";

export default class Data extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

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
        className="data fadeInFast"
        style={{
          overflowY: "scroll"
        }}
      >
        <header>
          <div className="banner-full">
            <h1>data</h1>
            <div className="line" />
            <h3>statistics proof that refugees are a great investment</h3>
            <div className="go-down" onClick={this.goDown}>
              <IconButton>
                <i className="fas fa-arrow-down color-2" />
              </IconButton>
            </div>
          </div>
        </header>
        <div className=" container ">
          <section>
            <h2 className="color-2 upper">
              Watch UNHCR historical Refugee Data
            </h2>
            <iframe
              title="iframe 1"
              src="http://data.unhcr.org/dataviz/"
              frameborder="0"
            />
          </section>
        </div>
      </div>
    );
  }
}
