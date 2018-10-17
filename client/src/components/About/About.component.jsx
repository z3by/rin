import React, { Component } from "react";
import "./About.css";
import TeamComponent from "./Team/Team.component";
import * as steeringInfo from "./steering.json";
import * as teamInfo from "./team.json";
import Strategy from "./Strategy/Strategy.component";
import HowItWorksComponent from "./HowItWorks/HowItWorks.component";
import WhyRefugeesComponent from "./WhyRefugees/WhyRefugees.component";
import WhoWeAreComponent from "./WhoWeAre/WhoWeAre.component";
import { Route, a } from "react-router-dom";

export default class About extends Component {
  constructor() {
    super();
    this.state = { pageNumber: 0 };
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
    document.querySelector(".header").style.backgroundImage =
      'url("/imgs/about1.jpg")';
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
            <h1 className="header-text" />
          </div>
        </header>

        <main className="container">
          <div id="intro" data-aos="slide-up">
            <p className="p-theme-1">
              <b> The Refugee Investment Network (RIN)</b> is the first blended
              finance investment collaborative dedicated to creating long-term
              solutions to global forced migration. The RIN moves private
              capital from commitment to active investment by sourcing,
              structuring, and supporting the financing of projects and
              companies that benefit refugees and host communities. Ultimately,
              the RIN aims to bridge the gap between the untapped
              entrepreneurial potential of refugees and capital markets to spur
              economic growth, create jobs, and increase socio-economic
              stability among displaced people.
            </p>
          </div>
          <ul className="grid-3 about-nav" data-aos="slide-up">
            <li>
              <a
                onClick={() => {
                  this.navigateTO("/about/strategy");
                }}
              >
                <h3>our strategy</h3>
                <i class="fas fa-street-view" />
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  this.navigateTO("/about/how-it-works");
                }}
              >
                <h3>how it works</h3>
                <i className="far fa-sun" />
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  this.navigateTO("/about/who-we-are");
                }}
              >
                <h3>who we are</h3>
                <i className="fas fa-users" />
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  this.navigateTO("/about/why-refugees");
                }}
              >
                <h3>why refugees</h3>
                <i className="fab fa-accusoft" />
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  this.navigateTO("/about/team");
                }}
              >
                <h3>meet the team</h3>
                <i class="fas fa-users" />
              </a>
            </li>

            <li>
              <a
                onClick={() => {
                  this.navigateTO("/about/steering");
                }}
              >
                <h3>steering comittee</h3>
                <i className="fas fa-crosshairs" />
              </a>
            </li>
          </ul>

          <div id="scroll-sign" />
          <section id="about-routes">
            <Route path="/about/strategy" component={Strategy} />
            <Route path="/about/how-it-works" component={HowItWorksComponent} />
            <Route
              path="/about/why-refugees"
              component={WhyRefugeesComponent}
            />
            <Route
              path="/about/team"
              render={() => <TeamComponent info={teamInfo} />}
            />
            <Route
              path="/about/steering"
              render={() => <TeamComponent info={steeringInfo} />}
            />
            <Route path="/about/who-we-are" component={WhoWeAreComponent} />
          </section>
          <div className="back-to-top" onClick={this.scrollToTop}>
            <i className="fas fa-arrow-circle-up" />
          </div>
        </main>
      </div>
    );
  }
}
