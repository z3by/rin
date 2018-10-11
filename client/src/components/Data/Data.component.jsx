import React, { Component } from "react";
import "./Data.css";

export default class Data extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 0
    };
  }

  onPageDown = () => {
    if (this.state.pageNumber < 3) {
      this.setState(
        {
          pageNumber: this.state.pageNumber + 1
        },
        () => {
          document.querySelector(".pages").style.top = `${-this.state
            .pageNumber * 100}vh`;
        }
      );
    }
  };

  onPageUp = () => {
    if (this.state.pageNumber > 0) {
      this.setState(
        {
          pageNumber: this.state.pageNumber - 1
        },
        () => {
          document.querySelector(".pages").style.top = `${-this.state
            .pageNumber * 100}vh`;
        }
      );
    }
  };

  render() {
    return (
      <div className="data fadeInFast">
        <div className="pages">
          <div className="page">
            <img src="/imgs/data/chart1.png" className="data-img" alt="" />
            <div className="data-text">
              <p>
                <b>INCREASED CAPITAL INVESTMENT</b> CAN MAKE A BIG DIFFERENCE
                The RIN's impact investing and blended finance collaborative
                will increase deal flow and help unlock private capital to spur
                economic growth and stability among refugees and their
                communities.
              </p>
            </div>
          </div>

          <div className="page">
            <img src="/imgs/data/chart4.png" className="data-img" alt="" />
            <div className="data-text">
              <p>
                <b>Today</b>, nearly 70 million people have been forcibly
                displaced worldwide, the highest number in human history. The
                resulting dilemma is the defining social crisis of our time.
              </p>
            </div>
          </div>

          <div className="page">
            <img src="/imgs/data/chart7.png" className="data-img" alt="" />
            <div className="data-text">
              <p>
                <b>The RIN</b> moves private capital from commitment to active
                investment by sourcing, structuring, and supporting the
                financing of projects and companies that benefit refugees and
                host communities.
              </p>
            </div>
          </div>

          <div className="page">
            <img src="/imgs/data/chart9.png" alt="chart" className="data-img" />
            <div className="data-text">
              <p>
                <b>Ultimately</b>, the RIN aims to bridge the gap between the
                untapped entrepreneurial potential of refugees and capital
                markets to spur economic growth, create jobs, and increase
                socio-economic stability among displaced people.
              </p>
            </div>
          </div>
        </div>
        <div className="arrows">
          <a onClick={this.onPageUp}>
            <i className="fas fa-arrow-left" />
          </a>
          <a onClick={this.onPageDown}>
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    );
  }
}
