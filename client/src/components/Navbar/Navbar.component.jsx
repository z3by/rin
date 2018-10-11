import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    counter: "10,034,623",
    index: -1
  };

  onClickCircle = e => {
    const index = parseInt(e.target.getAttribute("index"), 10) - 1;
    document.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".nav-rec")[index].classList.add("active");
  };

  toggleNavbar = () => {
    const collapsed = document.querySelector(".navbar").style.width === "0px";
    if (!collapsed) {
      document.querySelector(".navbar").style.width = "0px";
      document.querySelector(".navbar-middle").style.display = "none";
      document.querySelector(".toggle-nav").style.left = "0";
      document.querySelector(".toggle-nav i").style.transform = "initial";
      if (!!document.querySelector(".counter")) {
        document.querySelector(".counter").style.display = "none";
      }
    } else {
      document.querySelector(".navbar").style.width = "200px";
      if (!!document.querySelector(".counter")) {
        document.querySelector(".counter").style.display = "block";
      }
      document.querySelector(".navbar-middle").style.display = "flex";
      document.querySelector(".toggle-nav").style.left = "200px";
      document.querySelector(".toggle-nav i").style.transform =
        "rotate(180deg)";
    }
  };

  render() {
    return (
      <div>
        {/* <div className="back-gredient"></div> */}
        <div className="navbar">
          <div className="toggle-nav" onClick={this.toggleNavbar}>
            <i className="fas fa-arrow-right" />
          </div>
          <div className="logo">
            <Link to={"/"}>
              <img src="/imgs/old-logo.png" alt="" className="logo-img" />
            </Link>
          </div>
          <div className="navbar-middle">
            <Link to={"/stories"}>
              <div
                className="nav-rec active"
                index="1"
                onClick={this.onClickCircle}
              >
                <p className="nav-rec-text">stories</p>
              </div>
            </Link>
            <Link to={"/map"}>
              <div className="nav-rec" index="2" onClick={this.onClickCircle}>
                <p className="nav-rec-text">map</p>
              </div>
            </Link>
            <Link to={"/data"}>
              <div className="nav-rec" index="3" onClick={this.onClickCircle}>
                <p className="nav-rec-text">data</p>
              </div>
            </Link>
            <Link to={"/members"}>
              <div
                className="nav-rec rounded"
                index="4"
                onClick={this.onClickCircle}
              >
                <p className="nav-rec-text">members</p>
              </div>
            </Link>
            <Link to={"/about"}>
              <div className="nav-rec" index="5" onClick={this.onClickCircle}>
                <p className="nav-rec-text">about</p>
              </div>
            </Link>
            {/* <Link to={"/library"}>
              <div className="nav-rec" index="4" onClick={this.onClickCircle}>
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
          </div>
        </div>
      </div>
    );
  }
}
