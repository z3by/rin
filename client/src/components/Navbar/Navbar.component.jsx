import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      counter: "10,034,623",
      index: -1
    };
  }

  componentDidMount() {
    this.startCounter();
  }

  //start counter
  startCounter = () => {};

  toggleNavbar = () => {
    const collapsed = document.querySelector(".navbar").style.width === "0px";
    if (!collapsed) {
      document.querySelector(".navbar").style.width = "0px";
      document.querySelector(".navbar-middle").style.display = "none";
      document.querySelector(".toggle-nav").style.left = "0";
      document.querySelector(".toggle-nav i").style.transform = "rotate(45deg)";
      if (!!document.querySelector(".container")) {
        document.querySelector(".container").style.marginLeft = "15%";
      }
      if (!!document.querySelector(".counter")) {
        document.querySelector(".counter").style.display = "none";
      }
    } else {
      if (!!document.querySelector(".container")) {
        document.querySelector(".container").style.marginLeft =
          "calc(15% + 100px)";
      }
      document.querySelector(".navbar").style.width = "200px";
      if (!!document.querySelector(".counter")) {
        document.querySelector(".counter").style.display = "block";
      }
      document.querySelector(".navbar-middle").style.display = "flex";
      document.querySelector(".toggle-nav").style.left = "200px";
      document.querySelector(".toggle-nav i").style.transform = "rotate(0)";
    }
  };

  render() {
    return (
      <div>
        <div className="logo">
          <Link className="navbar-link" to={"/"}>
            <img src="/imgs/logo.png" alt="" className="logo-img" />
          </Link>
        </div>
        <nav className="navbar">
          <div className="toggle-nav" onClick={this.toggleNavbar}>
            <i className="fas fa-times" />
          </div>

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
              <Link className="navbar-link" index=" 4" to={"/members"}>
                <div className="nav-rec rounded" />
                <p className="nav-rec-text">members</p>
              </Link>
            </li>

            <li>
              <Link className="navbar-link" index="5" to={"/about"}>
                <div className="nav-rec" />
                <p className="nav-rec-text">
                  about
                  <ul className="nav-rec-menu">
                    <li>
                      <Link to={"/about/who-we-are"} hash={"#about-routes"}>
                        who we are
                      </Link>
                    </li>
                    <li>
                      <Link to={"/about/strategy"}>our strategy</Link>
                    </li>
                    <li>
                      <Link to={"/about/how-it-works"}>how it works</Link>
                    </li>
                    <li>
                      <Link to={"/about/why-refugees"}>why refugees </Link>
                    </li>
                  </ul>
                </p>
              </Link>
            </li>
            {/* <Link to={"/library"}>
               <div className="nav-rec" index="4" >
                <p className="nav-rec-text">library</p>
              </div>
            </Link>
            <Link to={"/members"}>
              <div
                className="nav-rec rounded"
                index="5"
                onClick={this.onClickCircle}
              >
                <p className="nav-rec-text">members</p>
              </div>
            </Link>
            <Link to={"/about"}>
              <div className="nav-rec" index="6" onClick={this.onClickCircle}>
                <p className="nav-rec-text">about</p>
              </div>
            </Link> */}
          </ul>
        </nav>
      </div>
    );
  }
}
