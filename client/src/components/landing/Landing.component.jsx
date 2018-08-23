import React, { Component } from "react";
import "./Landing.css";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1
    };
  }

  animateNext = () => {};

  animatePrev = () => {};

  render() {
    return (
      <div>
        <div className="landing">
          <div className="nav">
            <ul className="nav-group">
              <li className="nav-item">
                <a className="nav-link">stories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">map</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">data</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">library</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">about</a>
              </li>
            </ul>
          </div>

          <div className="social">
            <img src="imgs/facebook.png" alt="" />
            <img src="imgs/twitter.png" alt="" />
            <img src="imgs/instagram.png" alt="" />
          </div>
          <div className="circle" />
          <div className="up-rec" />
          <div className="up-rec-overlay" />
          <div className="down-rec" />
          <div className="down-rec-overlay" />

          <div className="arrows">
            <img src="imgs/arrow.png" alt="" onClick={this.animateNext} />
            <img src="imgs/arrow.png" alt="" onClick={this.animatePrev} />
          </div>
        </div>
      </div>
    );
  }
}
