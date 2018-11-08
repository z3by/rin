import React, { Component } from "react";
import "./Landing.css";
import Partners from "../Partners/Partners.component";
import CountUp from "react-countup";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 200034623,
      index: 0
    };
  }

  componentDidMount() {
    this.bindEvents();
    this.rotateArrows();
    this.showVideo();
    this.changeBackground();
    this.startCounter();
  }

  // bind the events to the local functions.
  bindEvents = () => {
    window.onmousewheel = this.handleWheel;
    window.onkeydown = this.handleArrowsInput;
    window.onmousemove = this.onMouseMove;
  };

  // rotate the arrows for the landing page.
  rotateArrows = () => {
    document.querySelector(".arrows").style.transform = "rotate(0)";
  };

  //start counter
  startCounter = () => {};

  // mouse move effect on the landing page circle;
  onMouseMove = e => {
    // get the mouse axis
    if (!document.querySelector(".effect-circle")) {
      return;
    }

    const circleX = e.clientX;
    const circleY = e.clientY;
    document.querySelector(".effect-circle").style.top = circleY / 10 + "px";
    document.querySelector(".effect-circle").style.left = circleX / 10 + "px";
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
          this.changeBackground();
          this.translateShapes();
          this.toggleOverlayColor();
          this.showVideo();
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
          this.changeBackground();
          this.translateShapes();
          this.toggleOverlayColor();
          this.showVideo();
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
          this.changeBackground();
          this.translateShapes();
          this.showVideo();
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
          this.changeBackground();
          this.translateShapes();
          this.showVideo();
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

  // change the circle background;
  changeBackground = () => {
    document.querySelector(".circle").style.background = `url(imgs/backs${this
      .state.index + 1}.jpg)`;
    document.querySelector(".circle").style.backgroundAttachment = "fixed";
    document.querySelector(".circle").style.backgroundSize = "100%";
    document.querySelector(".up-rec").style.background = `url(imgs/backs${this
      .state.index + 1}.jpg)`;
    document.querySelector(".up-rec").style.backgroundSize = "100%";
    document.querySelector(".up-rec").style.backgroundAttachment = "fixed";
    document.querySelector(".down-rec").style.background = `url(imgs/backs${this
      .state.index + 1}.jpg)`;
    document.querySelector(".down-rec").style.backgroundSize = "100%";
    document.querySelector(".down-rec").style.backgroundAttachment = "fixed";
  };

  translateShapes = () => {
    let random1 = Math.floor(Math.random() * 40);
    let random2 = Math.floor(Math.random() * 40);
    if (random1 < 20) {
      random1 += 22;
    }

    if (random2 < 20) {
      random2 += 20;
    }

    document.querySelector(".up-rec").style.left = `${random1}%`;
    document.querySelector(".up-rec").style.width = `${random1}vw`;
    document.querySelector(".up-rec-overlay").style.width = `${random1}vw`;
    document.querySelector(".up-rec-overlay").style.left = `${random1}%`;
    document.querySelector(".down-rec").style.right = `${random2}%`;
    document.querySelector(".down-rec").style.width = `${random2}vw`;
    document.querySelector(".down-rec-overlay").style.width = `${random2}vw`;
    document.querySelector(".down-rec-overlay").style.right = `${random2}%`;
  };

  // change the rectangles overlay color
  toggleOverlayColor = () => {
    document.querySelector(".up-rec-overlay").style.background =
      document.querySelector(".up-rec-overlay").style.background ===
      "var(--color-4)"
        ? "var(--color-2)"
        : "var(--color-4)";
    document.querySelector(".down-rec-overlay").style.background =
      document.querySelector(".down-rec-overlay").style.background ===
      "var(--color-2)"
        ? "var(--color-4)"
        : "var(--color-2)";
  };

  // navigate to route after 2 seconds
  navigate = () => {
    const routes = ["stories", "map", "data", "about", "library"];
    document.querySelector(".circle").classList.add("grow");
    document.querySelector(".circle").style.opacity = "1";
    document.querySelector(".circle-overlay").classList.add("grow");
    document.querySelector(".effect-circle").style.display = "none";
    document.querySelector(".down-rec-overlay").style.display = "none";
    document.querySelector(".down-rec").style.display = "none";
    document.querySelector(".up-rec").style.display = "none";
    document.querySelector(".up-rec-overlay").style.display = "none";

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
          <div className="circle fadeIn">
            <div className="effect-circle" />
            <video
              src="/videos/stories.mp4"
              autoPlay
              muted
              loop
              height="100"
              className="circle-video"
            />
          </div>

          <div className="shapes">
            <div className="up-rec slideInRight" />
            <div className="up-rec-overlay slideInRight" />
            <div className="down-rec slideInLeft" />
            <div className="down-rec-overlay slideInLeft" />
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
            <a onClick={this.animatePrev}>
              <i className="fas fa-arrow-left" />
            </a>
            <a onClick={this.animateNext}>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
