import React, { Component } from "react";
import "./Data.css";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Chart } from "chart.js";

export default class Data extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const canvas1 = document.querySelector("#canvas1");
    const myChart = new Chart(canvas1, {
      type: "bar",
      data: {
        labels: [
          "Syrian Arab Republic",
          "Afghanistan",
          "South Sudan",
          "Myanmar",
          "Somalia"
        ],
        datasets: [
          {
            label: "# of Refugees",
            data: [6.3, 2.6, 2.4, 1.2, 0.986],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

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
          <Typography component="h2" variant="h4" className="">
            More than two-thirds (68 per cent) of all refugees worldwide came
            from just five countries:
          </Typography>
          <div className="chart">
            <canvas id="canvas1" width="100" height="50" />
          </div>
        </div>
      </div>
    );
  }
}
