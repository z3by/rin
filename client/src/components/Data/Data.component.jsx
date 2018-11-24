import React, { Component } from "react";
import "./Data.css";
import IconButton from "@material-ui/core/IconButton";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "#f90",
      borderColor: "grey",
      data: [0, 10, 5, 2, 20, 30, 45]
    },
    {
      label: "My Second dataset",
      backgroundColor: "#90f",
      borderColor: "grey",
      data: [10, 40, 5, 8, 20, 5, 7]
    }
  ]
};

export default class Data extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  scrollToTop = () => {
    document.querySelector(".library").scrollIntoView({
      behavior: "smooth"
    });
  };

  goDown = () => {
    document.querySelector(".container").scrollIntoView({
      behavior: "smooth"
    });
  };

  render() {
    return (
      <div
        className="data fadeInFast"
        style={{
          overflowY: "scroll"
        }}
      >
        <header>
          <div className="banner-full">
            <h1>data</h1>
            <div className="line" />
            <h3>statistics proof that refugees are a great investment</h3>
            <div className="go-down" onClick={this.goDown}>
              <IconButton>
                <i className="fas fa-arrow-down color-2" />
              </IconButton>
            </div>
          </div>
        </header>
        <div className="container">
          <h1>hello</h1>
          <Line data={data} />
        </div>
      </div>
    );
  }
}
