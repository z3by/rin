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
          this.changeBackground();
          this.translateShapes();
          this.toggleOverlayColor();
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
          this.changeBackground();
          this.translateShapes();
          this.toggleOverlayColor();
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

  changeBackground = () => {
    document.querySelector(".circle").style.background = `url(imgs/backs(${
      this.state.index
    }).jpg)`;
    document.querySelector(".up-rec").style.background = `url(imgs/backs(${
      this.state.index
    }).jpg)`;
    document.querySelector(".down-rec").style.background = `url(imgs/backs(${
      this.state.index
    }).jpg)`;
  };

  translateShapes = () => {
    let random1 = Math.floor(Math.random() * 50);
    let random2 = Math.floor(Math.random() * 50);
    if (random1 < 15) {
      random1 += 15;
    }

    if (random2 < 15) {
      random2 += 15;
    }

    document.querySelector(".up-rec").style.left = `${random1}%`;
    document.querySelector(".up-rec-overlay").style.left = `${random1}%`;
    document.querySelector(".down-rec").style.right = `${random2}%`;
    document.querySelector(".down-rec-overlay").style.right = `${random2}%`;
  };

  toggleOverlayColor = () => {
    document.querySelector(".up-rec-overlay").style.background =
      document.querySelector(".up-rec-overlay").style.background ===
      "var(--color-2)"
        ? "var(--color-4)"
        : "var(--color-2)";
    document.querySelector(".down-rec-overlay").style.background =
      document.querySelector(".down-rec-overlay").style.background ===
      "var(--color-4)"
        ? "var(--color-2)"
        : "var(--color-4)";
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

          <ul className="social">
            <li className="social-item">
              <a href="" className="social-link">
                <i className="fa fa-twitter social-icon" />
              </a>
            </li>
            <li className="social-item">
              <a href="" className="social-link">
                <i className="fa fa-facebook social-icon" />
              </a>
            </li>
            <li className="social-item">
              <a href="" className="social-link">
                <i className="fa fa-instagram social-icon" />
              </a>
            </li>
          </ul>
          <div className="circle shrink" />
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
