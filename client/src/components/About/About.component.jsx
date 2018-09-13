import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  constructor() {
    super();
    this.state = { pageNumber: 0 };
  }

  // handle the onclick event on the down button
  onPageDown = () => {
    if (this.state.pageNumber < 5) {
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
        <div className="pages">

          <div className="page">
            <img src="/imgs/about.jpg" alt="" />
            <p>
              PROVING THAT REFUGEES ARE INVESTABLE The Refugee Investment
              Network is the first blended finance collaborative dedicated to
              creating long-term solutions to global forced migration.
            </p>
          </div>
          <div className="page">
            <img src="/imgs/about4.jpg" alt="" />
            <p>
              INCREASED CAPITAL INVESTMENT CAN MAKE A BIG DIFFERENCE The RIN's
              blended finance collaborative will increase deal flow and help
              unlock private capital to spur economic growth and stability among
              refugees and their communities.
            </p>
          </div>
          <div className="page">
            <img src="/imgs/about1.jpg" alt="" />
            <p>
              WHO WE ARE Key Partners RIN Members represent the full capital
              continuum: foundations and philanthropists, impact, institutional,
              and commercial investors – as well as international finance
              institutions, policymakers, and humanitarians. RIN members all
              share a commitment to courageous action, innovative economic
              solutions, and deep collaboration.
            </p>
          </div>
          <div className="page">
            <img src="/imgs/about2.jpg" alt="" />
            <p>
              Operating Team Systems entrepreneurs John Kluge (Alight Fund &
              Toilet Hackers) and Tim Docking (IBM & Millennium Challenge
              Corporation) lead the RIN with support from the Global Development
              Incubator (GDI), a non-profit that builds startups and
              partnerships to address global development challenges.
            </p>
          </div>
          <div className="page">
            <ul className="team">
              <li>
                <img
                  src="https://static1.squarespace.com/static/5b280d6a620b85faae73af1a/t/5b2d7f516d2a73e5fb52df55/1529708531716/JohnKlugeRIN.jpg?format=500w"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://static1.squarespace.com/static/5b280d6a620b85faae73af1a/t/5b2d80b0f950b74c6ebeb479/1529708729154/Tim+Docking+RIN.jpeg?format=500w"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className="page">
            <ul className="team">
              <li>
                <img
                  src="https://static1.squarespace.com/static/5b280d6a620b85faae73af1a/t/5b2bd3be562fa71d2ca43d39/1529598912445/Andrew+headshot.jpg?format=500w"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://static1.squarespace.com/static/5b280d6a620b85faae73af1a/t/5b340d646d2a73ddf97a359c/1530137958581/Sara+Beatty+headshot.jpg?format=500w"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="arrows">
          <img src="imgs/arrow.png" alt="" onClick={this.onPageUp} />
          <img src="imgs/arrow.png" alt="" onClick={this.onPageDown} />
        </div>
      </div>
    );
  }
}
