import React, { Component } from "react";
import "./About.css";
import Strategy from "./Strategy/Strategy.component";
import HowItWorksComponent from "./HowItWorks/HowItWorks.component";
import WhyRefugeesComponent from "./WhyRefugees/WhyRefugees.component";
import WhoWeAreComponent from "./WhoWeAre/WhoWeAre.component";
import { Route } from "react-router-dom";
import AboutIntro from "./AboutIntro/AboutIntro";

export default class About extends Component {
  constructor() {
    super();
    this.state = { pageNumber: 0 };
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
    document.querySelector(".header").style.backgroundImage =
      'url("/imgs/backs4.jpg")';
  }

  componentWillUnmount() {
    document.body.style.overflowY = "hidden";
  }
  // handle the onclick event on the down button
  onPageDown = () => {
    if (this.state.pageNumber < 1) {
      this.setState(
        {
          pageNumber: this.state.pageNumber + 1
        },
        () => {
          // animate the pages by one page down
          document.querySelector(".pages").style.top = `${-this.state
            .pageNumber * 100}vh`;
        }
      );
    }
  };

  // handle the onclick event on the up button
  onPageUp = () => {
    if (this.state.pageNumber > 0) {
      this.setState(
        {
          pageNumber: this.state.pageNumber - 1
        },
        () => {
          // animate the pages by one page up
          document.querySelector(".pages").style.top = `${-this.state
            .pageNumber * 100}vh`;
        }
      );
    }
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

  scrollToTop = () => {
    document.querySelector(".about-nav").scrollIntoView();
  };

  goDown = () => {
    document.querySelector("#scroll-sign").scrollIntoView({
      behavior: "smooth"
    });
  };

  closePopup = () => {
    document.querySelector(".read-more-popup").style.display = "none";
  };

  render() {
    return (
      <div className="about fadeInFast">
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

        <header>
          <div className="header">
            <h1 className="header-text color-1">About Us</h1>
            <ul className="about-nav">
              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/about/strategy");
                  }}
                >
                  <h5 className="color-1 upper">our strategy</h5>
                  <i className="color-1 fas fa-street-view" />
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/about/how-it-works");
                  }}
                >
                  <h5 className="color-1 upper">how it works</h5>
                  <i className="color-1 far fa-sun" />
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/about/who-we-are");
                  }}
                >
                  <h5 className="color-1 upper">who we are</h5>
                  <i className="color-1 fas fa-users" />
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    this.navigateTO("/about/why-refugees");
                  }}
                >
                  <h5 className="color-1 upper">why refugees</h5>
                  <i className="color-1 fab fa-accusoft" />
                </a>
              </li>
            </ul>
          </div>
          <div className="go-down" onClick={this.goDown}>
            <i className="fas fa-arrow-circle-down" />
          </div>
        </header>

        <main className="container">
          <div id="scroll-sign" />
          <section id="about-routes">
            <Route exact path="/about" component={AboutIntro} />
            <Route path="/about/strategy" component={Strategy} />
            <Route path="/about/how-it-works" component={HowItWorksComponent} />
            <Route
              path="/about/why-refugees"
              component={WhyRefugeesComponent}
            />
            <Route path="/about/who-we-are" component={WhoWeAreComponent} />
          </section>
        </main>
        <div className="back-to-top" onClick={this.scrollToTop}>
          <i className="fas fa-arrow-circle-up" />
        </div>
      </div>
    );
  }
}
