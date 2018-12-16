import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: "10,034,623",
      index: -1,
      collapsed: true
    };

    document.body.onmousemove = this.onMouseMove;
  }

  componentDidMount() {
    this.startCounter();
  }

  //start counter
  startCounter = () => {};

  onMouseMove = e => {
    const mousePosition = e.clientX;
    const mousePosition2 = e.clientY;
    if (mousePosition < 200 && mousePosition2 > 200 && this.state.collapsed) {
      this.toggleNavbar(false);
    } else if (
      mousePosition > 200 &&
      mousePosition2 > 200 &&
      !this.state.collapsed
    ) {
      this.toggleNavbar(true);
    }
  };

  toggleNavbar = newState => {
    this.setState({
      collapsed: newState || !this.state.collapsed
    });
  };

  navigateTo = url => {
    this.props.history.push(url);
    this.scrollDown();
  };

  scrollDown = () => {
    document.body.scrollBy({
      top: window.innerHeight - document.body.scrollTop,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <Link className="navbar-link" to={"/"}>
            <img src="/imgs/logo.png" alt="" className="logo-img" />
          </Link>
        </div>
        <nav className={`navbar ${this.state.collapsed ? "collapsed" : ""}`}>
          <ul className="navbar-middle">
            <li>
              <Link className="navbar-link" index="1" to={"/stories"}>
                <div className="nav-rec" />
                <p className="nav-rec-text">stories</p>
              </Link>
            </li>

            <li>
              <Link className="navbar-link" index="2" to={"/map"}>
                <div className="nav-rec" />
                <p className="nav-rec-text">map</p>
              </Link>
            </li>
            <li>
              <Link className="navbar-link" index="3" to={"/data"}>
                <div className="nav-rec" />
                <p className="nav-rec-text">data</p>
              </Link>
            </li>

            <li>
              <Link className="navbar-link" index="4" to={"/members"}>
                <div className="nav-rec rounded" />
                <p className="nav-rec-text">members</p>
              </Link>
            </li>

            <li>
              <div className="navbar-link" index="5">
                <div className="nav-rec" />
                <div>
                  <p className="nav-rec-text">about</p>
                  <ul
                    className="nav-rec-menu"
                    style={{ opacity: this.state.collapsed ? "0" : "1" }}
                  >
                    <li>
                      <a
                        onClick={() => {
                          this.navigateTo("/about");
                        }}
                      >
                        who we are
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          this.navigateTo("/about/strategy");
                        }}
                      >
                        our strategy
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          this.navigateTo("/about/why-refugees");
                        }}
                      >
                        why refugees{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link className="navbar-link" index="6" to={"/news"}>
                <div className="nav-rec" />
                <p className="nav-rec-text">News</p>
              </Link>
            </li>
            <li>
              <Link className="navbar-link" index="7" to={"/blog"}>
                <div className="nav-rec" />
                <p className="nav-rec-text">blog</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
