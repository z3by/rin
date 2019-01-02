import React, { Component } from "react";
import "./News.css";
import IconButton from "@material-ui/core/IconButton";
import Links from "./Links/Links.component";
import Footer from "../Footer/Footer.component";
import SocialLinks from "../Landing/socialLinks.component";
import Typography from "@material-ui/core/Typography";

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
        <SocialLinks />
        <header>
          <div className="banner-full">
            <Typography variant="h1" className="hero-title upper color-2">
              News
            </Typography>
            <Typography variant="h5" className="hero-subtitle color-1">
              RIN press and other latest resources around refugee investment
            </Typography>
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
        <Footer />
      </div>
    );
  }
}
