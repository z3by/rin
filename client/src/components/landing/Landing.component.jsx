import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    window.onmousewheel = this.handleWheel;
    window.onkeydown = this.handleArrowsInput;
    document.querySelector('.arrows').style.transform = 'rotate(0)';
  }





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
    } else {
      this.setState({
        index: 0
      });
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
    } else {
      this.setState({
        index: 5
      });
    }
  };


  handleWheel = (e) => {
    if (e.deltaY === -100) {
      this.animatePrev();
    } else {
      this.animateNext();
    }
  }



  handleArrowsInput = (e) => {
    if (e.key === "ArrowRight") {
      this.animateNext();
    }
    else if (e.key === "ArrowLeft") {
      this.animatePrev();
    }

  }


  toggleClassActive = () => {
    document.querySelectorAll(".active").forEach(e => {
      e.classList.remove("active");
    })
    document
      .querySelector(".nav-group")
      .childNodes[this.state.index].firstChild.classList.add("active");
  };


  changeBackground = () => {
    document.querySelector(".circle").style.background = `url(imgs/backs${this.state.index + 1}.jpg)`;
    document.querySelector(".circle").style.backgroundAttachment = 'fixed';
    document.querySelector(".up-rec").style.background = `url(imgs/backs${this.state.index + 1}.jpg)`;
    document.querySelector(".up-rec").style.backgroundAttachment = 'fixed';
    document.querySelector(".down-rec").style.background = `url(imgs/backs${this.state.index + 1}.jpg)`;
    document.querySelector(".down-rec").style.backgroundAttachment = 'fixed';

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

    return (
      <div>
        <div className="landing">
          <div className="nav">
            <ul className="nav-group">
              <li className="nav-item">
                <Link to={'/stories'} className="nav-link active">stories</Link>
              </li>
              <li className="nav-item">
                <Link to={'/map'} className="nav-link">map</Link>

              </li>
              <li className="nav-item">
                <Link to={'/data'} className="nav-link">data</Link>

              </li>
              <li className="nav-item">
                <Link to={'/library'} className="nav-link">library</Link>

              </li>
              <li className="nav-item">
                <Link to={'/about'} className="nav-link">about</Link>

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
          <div className="circle fadeIn" />
          <div className="up-rec slideInRight" />
          <div className="up-rec-overlay slideInRight" />
          <div className="down-rec slideInLeft" />
          <div className="down-rec-overlay slideInLeft" />

          <div className="arrows">
            <img src="imgs/arrow.png" alt="" onClick={this.animatePrev} />
            <img src="imgs/arrow.png" alt="" onClick={this.animateNext} />
          </div>
        </div>
      </div>
    );
  }
}





