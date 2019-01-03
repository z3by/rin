import React, { Component } from "react";
import "./About.css";
import Strategy from "./Strategy/Strategy.component";
import WhyRefugeesComponent from "./WhyRefugees/WhyRefugees.component";
import WhoWeAreComponent from "./WhoWeAre/WhoWeAre.component";
import { Route } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import Footer from "../Footer/Footer.component";
import SocialLinks from "../Landing/socialLinks.component";
import Logo from "../Landing/Logo.component";

export default class About extends Component {
  constructor() {
    super();
    this.state = { pageNumber: 0 };
  }

  componentDidMount() {
    document.querySelector(".header").style.backgroundImage =
      'url("/imgs/backs4.jpg")';
  }

  // navigate to specifec route
  navigateTO = route => {
    this.props.history.push(route);
    this.goDown();
  };

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

  closePopup = () => {
    document.querySelector(".read-more-popup").style.display = "none";
  };

  scrollDown = () => {
    document.body.scrollBy({
      top: window.innerHeight - document.body.scrollTop,
      behavior: "smooth"
    });
  };
  
  render() {
    return (
      <div className="about fadeInFast">
        <SocialLinks />
        <Logo />
        <div className="read-more-popup" onClick={this.closePopup}>
          <div className="read-more-wrapper">
            <img src="" alt="" className="read-more-img" />
            <div className="read-more-close">
              <i className="fas fa-times" />
            </div>
            <h1 className="read-more-name ">name</h1>
            <h2 className="read-more-title heading-theme-3">title</h2>
            <p className="read-more-description">description</p>
          </div>
        </div>

        <header className="header">
          <Typography variant="h1" className="hero-title upper color-2">
            About Us
          </Typography>
          <ul className="header-nav">
            <li>
              <IconButton
                onClick={() => {
                  this.navigateTO("/about/strategy");
                }}
              >
                <i className="fas fa-street-view" />
              </IconButton>
              <h5 className="upper">our strategy</h5>
            </li>

            <li>
              <IconButton
                onClick={() => {
                  this.navigateTO("/about");
                }}
              >
                <i className="fas fa-users" />
              </IconButton>
              <h5 className="upper">who we are</h5>
            </li>

            <li>
              <IconButton
                onClick={() => {
                  this.navigateTO("/about/why-refugees");
                }}
              >
                <i className="fab fa-accusoft" />
              </IconButton>
              <h5 className="upper">why refugees</h5>
            </li>
          </ul>
          <div className="go-down" onClick={this.goDown}>
            <IconButton className="arrow-btn">
              <i className="fas fa-arrow-down" />
            </IconButton>
          </div>
        </header>

        <main className="container">
          <div id="scroll-sign" />
          <section id="about-routes">
            <Route path="/about/strategy" component={Strategy} />
            <Route
              path="/about/why-refugees"
              component={WhyRefugeesComponent}
            />
            <Route path="/about" exact component={WhoWeAreComponent} />
          </section>
        </main>
        <div className="back-to-top" style={{ margin: "20px 0" }}>
          <IconButton className="arrow-btn" onClick={this.scrollToTop}>
            <i className="fas fa-arrow-up" />
          </IconButton>
        </div>
        <Footer />
      </div>
    );
  }
}
