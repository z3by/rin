import React, { Component } from "react";
import "./Library.css";
import IconButton from "@material-ui/core/IconButton";

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
            <div className="go-down" onClick={this.goDown}>
              <IconButton>
                <i className="fas fa-arrow-down color-2" />
              </IconButton>
            </div>
          </div>
        </header>
        <div className="container">
          <section>
            <h2 className="color-2 upper">Figures at a Glance</h2>
            <iframe
              title="iframe 1"
              src="http://www.unhcr.org/figures-at-a-glance.html"
              width="100%"
              height="800"
              frameborder="0"
            />
          </section>
          <section>
            <h2 className="color-2 upper">
              How investment can unlock the potential of refugees
            </h2>
            <iframe
              title="iframe 2"
              src="https://static1.squarespace.com/static/5b280d6a620b85faae73af1a/t/5bd1e2b39140b788ed67c371/1540481747374/RIN+Investor+Report-Paradigm+Shift-FINAL.pdf"
              width="100%"
              height="800"
              frameborder="0"
            />
          </section>
          <section>
            <h2 className="color-2 upper">Syrian situation statistics</h2>

            <iframe
              title="iframe 3"
              src="https://data2.unhcr.org/en/situations/syria"
              width="100%"
              height="800"
              frameborder="0"
            />
          </section>
          <section>
            <iframe
              title="iframe 4"
              src="https://data2.unhcr.org/en/countries/"
              width="100%"
              height="800"
              frameborder="0"
            />
          </section>
        </div>
      </div>
    );
  }
}
