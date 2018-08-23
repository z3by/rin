import React, { Component } from "react";
import "./Landing.css";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  componentDidMount() {}

  animateNext = () => {
    if (this.state.index < 4) {
      this.setState(
        {
          index: this.state.index + 1
        },
        () => {
          const divWidth = document.querySelector(".nav-item").offsetWidth;
          const nav = document.querySelector(".nav");
          nav.style.transform = `translate(${-this.state.index * divWidth}px)`;
          this.toggleClassActive();
        }
      );
    }
  };

  animatePrev = () => {
    if (this.state.index > 0) {
      this.setState(
        {
          index: this.state.index - 1
        },
        () => {
          const divWidth = document.querySelector(".nav-item").offsetWidth;
          const nav = document.querySelector(".nav");
          nav.style.transform = `translate(${-this.state.index * divWidth}px)`;
          this.toggleClassActive();
        }
      );
    }
  };

  toggleClassActive = () => {
    document.querySelector(".active").classList.remove("active");
    document
      .querySelector(".nav-group")
      .childNodes[this.state.index].firstChild.classList.add("active");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="landing">
          <div className="nav">
            <ul className="nav-group">
              <li className="nav-item">
                <a className="nav-link active">stories</a>
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
            <img src="imgs/arrow.png" alt="" onClick={this.animatePrev} />
            <img src="imgs/arrow.png" alt="" onClick={this.animateNext} />
          </div>
        </div>
      </div>
    );
  }
}
