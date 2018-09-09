import React, { Component } from "react";
import Stories from "../Stories/Stories.component";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    counter: 10034623,
    index: -1
  };

  onClickCircle = e => {
    const index = parseInt(e.target.getAttribute("index")) - 1;
    document.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".nav-rec")[index].classList.add("active");
  };

  render() {
    return (
      <div>
        <div className="navbar">
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
                <a className="nav-rec-text">stories</a>
              </div>
            </Link>
            <Link to={"/map"}>
              <div className="nav-rec" index="2" onClick={this.onClickCircle}>
                <a className="nav-rec-text">map</a>
              </div>
            </Link>
            <Link to={"/data"}>
              <div className="nav-rec" index="3" onClick={this.onClickCircle}>
                <a className="nav-rec-text">data</a>
              </div>
            </Link>
            <Link to={"/library"}>
              <div className="nav-rec" index="4" onClick={this.onClickCircle}>
                <a className="nav-rec-text">library</a>
              </div>
            </Link>
            <Link to={"/members"}>
              <div
                className="nav-rec rounded"
                index="5"
                onClick={this.onClickCircle}
              >
                <a className="nav-rec-text">members</a>
              </div>
            </Link>
            <Link to={"/about"}>
              <div className="nav-rec" index="6" onClick={this.onClickCircle}>
                <a className="nav-rec-text">about</a>
              </div>
            </Link>
          </div>
          <div className="counter">
            <h4>
              {this.state.counter}
              <span>$</span>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
