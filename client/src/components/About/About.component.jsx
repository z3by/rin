import React, { Component } from "react";
import "./About.css";

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
        <img src="/imgs/about1.jpg" className="banner-img" alt="" />
        <div className="container">
          <div className="about-header">
            <h1 className="heading-theme-1">About</h1>
            <p className="p-theme-1">
              The RIN moves private capital from commitment to active investment
              by sourcing, structuring, and supporting the financing of projects
              and companies that benefit refugees and host communities.
            </p>
          </div>

          <img src="/imgs/about2.jpg" className="banner-img" alt="" />
          <h2 className="heading-theme-2">
            The RIN strategy has three pillars:
          </h2>
          <p className="p-theme-1">
            <b>Research:</b> Create the first investor-centered knowledge hub
            targeting business opportunities that support refugee self-reliance{" "}
            <br />
            <b>Facilitation:</b> Build a pipeline of bankable deals that will
            speed and scale private investment in communities of displaced
            people <br />
            <b>Policy and Advocacy:</b> Articulate and bridge investor needs to
            funders, governments, and the development community to drive
            catalytic investments and policies <br />
          </p>

          <div className="team">
            <h1 className="heading-theme-1">meet the team</h1>
            <div className="team-members">
              <div className="team-member">
                <img
                  src="/imgs/John.jpg"
                  alt="Jane"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">JOHN W. KLUGE</h2>
                <h3 className="heading-theme-3">Founder + Managing Director</h3>
                <p className="p-theme-1">
                  John W. Kluge is a systems entrepreneur and committed social
                  justice activist. He is the Co-Founder and Managing Partner of
                  the Alight Fund, an investment and financing company for
                  refugee and host country entrepreneurs. Previously, he
                  co-founded Eirene, a multi-family-office impact investing
                  fund, Toilet Hackers, a social enterprise dedicated to scaling
                  access to dignified sanitation for the 2.5 billion people
                  without a toilet
                </p>
              </div>

              <div className="team-member">
                <img
                  src="/imgs/Tim.jpeg"
                  alt="Mike"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">TIMOTHY W. DOCKING, Ph.D</h2>
                <h3 className="heading-theme-3">Managing Director</h3>
                <p className="p-theme-1">
                  Timothy W. Docking, Ph.D. is a Washington, D.C.-based business
                  executive with twenty years of emerging market and public
                  sector experience. As an intrapreneur, he worked at the
                  intersection of business, technology and development and built
                  a new $100M revenue stream at IBM; as a public sector
                  executive and manager, he helped start up the MCC.
                </p>
              </div>
              <div className="team-member">
                <img
                  src="/imgs/Andrew.jpg"
                  alt="John"
                  style={{ width: "100%" }}
                />
                <h2 className="heading-theme-2">ANDREW STERN</h2>
                <h3 className="heading-theme-3">Strategic Advisor</h3>
                <p className="p-theme-1">
                  Andrew Stern is the Founder, President and Executive Director
                  of the Global Development Incubator (GDI) and a member of the
                  GDI U.S. and Hong Kong boards. He leads the team across focus
                  areas and crafts unconventional perspectives to drive the
                  global development sector forward. Stern has played many roles
                  within GDI initiatives, including Interim CEO of Convergence,
                  the global network for Blended Finance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
