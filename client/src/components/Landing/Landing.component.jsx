import React, { Component } from "react";
import "./Landing.css";
import Partners from "../Partners/Partners.component";
import CountUp from "react-countup";
import IconButton from "@material-ui/core/IconButton";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 200034623,
      index: 0,
      clientX: 0,
      clientY: 0,
      navigating: false
    };
  }

  componentDidMount() {
    this.bindEvents();
    this.startCounter();
  }

  // bind the events to the local functions.
  bindEvents = () => {
    window.onmousewheel = this.handleWheel;
    window.onkeydown = this.handleArrowsInput;
    window.onmousemove = this.onMouseMove;
  };

  //start counter
  startCounter = () => {};

  // mouse move effect on the landing page circle;
  onMouseMove = e => {
    const circleX = e.clientX;
    const circleY = e.clientY;
    this.setState({
      clientX: circleX,
      clientY: circleY
    });
  };

  // key press handler for the landing page
  handleArrowsInput = e => {
    if (e.key === "ArrowRight") {
      this.animateNext();
    } else if (e.key === "ArrowLeft") {
      this.animatePrev();
    }
  };

  // show the video only on stories tab
  showVideo = () => {
    if (this.state.index !== 0) {
      document.querySelector(".circle-video").style.display = "none";
    } else {
      document.querySelector(".circle-video").style.display = "initial";
    }
  };

  // change current context on the landing page;
  animateNext = () => {
    // if (this.state.index < 4) {
    if (this.state.index < 3) {
      this.setState(
        {
          index: this.state.index + 1
        },
        () => {
          const divWidth = document.querySelector(".nav-item").offsetWidth;
          const nav = document.querySelector(".nav");
          nav.style.transform = `translate(${-this.state.index * divWidth}px)`;
          this.toggleClassActive();
          this.generateRandomNumbers();
        }
      );
    } else {
      this.setState(
        {
          index: 0
        },
        () => {
          const divWidth = document.querySelector(".nav-item").offsetWidth;
          const nav = document.querySelector(".nav");
          nav.style.transform = `translate(${-this.state.index * divWidth}px)`;
          this.toggleClassActive();
          this.generateRandomNumbers();
        }
      );
    }
  };

  // change current context on the landing page;
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
          this.generateRandomNumbers();
        }
      );
    } else {
      this.setState(
        {
          index: 3
        },
        () => {
          const divWidth = document.querySelector(".nav-item").offsetWidth;
          const nav = document.querySelector(".nav");
          nav.style.transform = `translate(${-this.state.index * divWidth}px)`;
          this.toggleClassActive();
          this.generateRandomNumbers();
        }
      );
    }
  };

  // toggle the 'active' class on
  toggleClassActive = () => {
    document.querySelectorAll(".active").forEach(e => {
      e.classList.remove("active");
    });
    document
      .querySelector(".nav-group")
      .childNodes[this.state.index].firstChild.classList.add("active");
  };

  generateRandomNumbers = () => {
    let random1 = Math.floor(Math.random() * 40);
    let random2 = Math.floor(Math.random() * 40);
    if (random1 < 20) {
      random1 += 22;
    }

    if (random2 < 20) {
      random2 += 20;
    }
    this.setState({
      random1: random1,
      random2: random2
    });
  };

  // navigate to route after 2 seconds
  navigate = () => {
    this.setState({
      navigating: true
    });
    const routes = ["stories", "map", "data", "about", "library"];
    setTimeout(() => {
      this.props.history.push(routes[this.state.index]);
    }, 2000);
  };

  render() {
    return (
      <div className="landing-main">
        <div className="partners">
          <Partners />
        </div>
        <div className="landing fadeInFast">
          <div className="nav">
            <ul className="nav-group">
              <li className="nav-item">
                <a onClick={this.navigate} className="nav-link active">
                  success stories
                </a>
              </li>
              <li className="nav-item">
                <a onClick={this.navigate} className="nav-link">
                  projects map
                </a>
              </li>
              <li className="nav-item">
                <a onClick={this.navigate} className="nav-link">
                  data
                </a>
              </li>
              <li className="nav-item">
                <a onClick={this.navigate} className="nav-link">
                  about us
                </a>
              </li>
              {/* <li className="nav-item">
                <a onClick={this.navigate} className="nav-link">
                  library
                </a>
              </li> */}
            </ul>
          </div>

          <div className="circle-overlay" />
          <div
            className={`circle fadeIn ${this.state.navigating ? "grow" : ""}`}
            style={{
              backgroundImage: `url(imgs/backs${this.state.index + 1}.jpg)`,
              top: this.state.clientY / 12,
              left: this.state.clientX / 12 + window.innerWidth / 3
            }}
          >
            <div
              className={`${this.state.navigating ? "hide" : "effect-circle"}`}
              style={{
                top: this.state.clientY / 10,
                left: this.state.clientX / 10
              }}
            />
          </div>

          <div className="shapes">
            <div
              className={`${
                this.state.navigating ? "hide" : "up-rec slideInRight"
              }`}
              style={{
                backgroundImage: `url(imgs/backs${this.state.index + 1}.jpg)`,
                left: `${this.state.random1}%`
              }}
            />
            <div
              className={`${
                this.state.navigating ? "hide" : "up-rec-overlay slideInRight"
              }`}
              style={{
                left: `${this.state.random1}%`
              }}
            />
            <div
              className={`${
                this.state.navigating ? "hide" : "down-rec slideInLeft"
              }`}
              style={{
                left: `${this.state.random2}%`,
                backgroundImage: `url(imgs/backs${this.state.index + 1}.jpg)`
              }}
            />
            <div
              className={`${
                this.state.navigating ? "hide" : "down-rec-overlay slideInLeft"
              }`}
              style={{
                left: `${this.state.random2}%`
              }}
            />
          </div>

          <div className="counter">
            <h4>
              <CountUp
                start={0}
                end={this.state.counter}
                duration={2.75}
                separator=","
                decimal=","
                prefix="$"
              >
                {({ countUpRef, start }) => {
                  this.startCounter = start;
                  return (
                    <div>
                      <span ref={countUpRef} />
                      <p className="p-theme-2">Partner Commitments</p>
                    </div>
                  );
                }}
              </CountUp>
            </h4>
          </div>

          <div className="arrows">
            <IconButton onClick={this.animatePrev}>
              <i className="fas fa-arrow-left" />
            </IconButton>
            <IconButton onClick={this.animateNext}>
              <i className="fas fa-arrow-right" />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}
