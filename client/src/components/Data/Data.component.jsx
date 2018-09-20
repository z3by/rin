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
            <img src="/imgs/data/1.jpg" alt="" className="data-img" />
            <p>
              INCREASED CAPITAL INVESTMENT CAN MAKE A BIG DIFFERENCE The RIN's
              impact investing and blended finance collaborative will increase
              deal flow and help unlock private capital to spur economic growth
              and stability among refugees and their communities.
            </p>
          </div>

          <div className="page">
            <img src="/imgs/data/2.jpg" alt="" className="data-img" />
            <p>
              Today, nearly 70 million people have been forcibly displaced
              worldwide, the highest number in human history. The resulting
              dilemma is the defining social crisis of our time.
            </p>
          </div>

          <div className="page">
            <img src="/imgs/data/3.jpg" alt="" className="data-img" />
            <p>
              The RIN moves private capital from commitment to active investment
              by sourcing, structuring, and supporting the financing of projects
              and companies that benefit refugees and host communities.
            </p>
          </div>

          <div className="page">
            <img src="/imgs/data/4.jpg" alt="" className="data-img" />
            <p>
              Ultimately, the RIN aims to bridge the gap between the untapped
              entrepreneurial potential of refugees and capital markets to spur
              economic growth, create jobs, and increase socio-economic
              stability among displaced people.
            </p>
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
