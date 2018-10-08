import React, { Component } from "react";
import "./About.css";
import TeamComponent from "./Team/Team.component";
import * as steeringInfo from "./steering.json";
import * as teamInfo from "./team.json";
import Strategy from "./Strategy/Strategy.component";
import HowItWorksComponent from "./HowItWorks/HowItWorks.component";
import WhyRefugeesComponent from "./WhyRefugees/WhyRefugees.component";
import { Link } from "react-router-dom";

export default class About extends Component {
  constructor() {
    super();
    this.state = { pageNumber: 0 };
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
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

  render() {
    return (
      <div className="about fadeInFast">
        <header>
          <div className="header">
            <h1 className="header-text" />
            <img src="/imgs/about1.jpg" className="header-img" alt="" />
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

          <ul className="grid-3">
            <Link to={"/landing"}>
              <h1 className="">Our strategy</h1>
              <i className="fa-4x fas fa-map" />
            </Link>

            <Link to={"/landing"}>
              <h1 className="">How It Works</h1>
              <i className="fa-4x fas fa-map" />
            </Link>

            <Link to={"/landing"}>
              <h1 className="">Whoe We Are </h1>
              <i className="fa-4x fas fa-map" />
            </Link>

            <Link to={"/landing"}>
              <h1 className="">Why Refugees</h1>
              <i className="fa-4x fas fa-map" />
            </Link>

            <Link to={"/landing"}>
              <h1 className="">Our Team</h1>
              <i className="fa-4x fas fa-map" />
            </Link>

            <Link to={"/landing"}>
              <h1 className="">steering Comittee</h1>
              <i className="fa-4x fas fa-map" />
            </Link>
          </ul>

          <section id="strategy">
            <Strategy />
          </section>

          <section id="how-it-works">
            <HowItWorksComponent />
          </section>

          <section id="why-refugees">
            <WhyRefugeesComponent />
          </section>
          <section id="who-we-are" />
          <section id="team">
            <h1 className="heading-theme-2 capitalize">
              <i className="fas fa-users" />
              meet the team
            </h1>
            <TeamComponent info={teamInfo} />
          </section>
          <section id="steering">
            <h1 className="heading-theme-2 capitalize">
              <i className="fas fa-users" />
              meet the steering comittee
            </h1>
            <TeamComponent info={steeringInfo} />
          </section>
        </main>
      </div>
    );
  }
}
