import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Typography } from "@material-ui/core";
import Axios from "axios";

export default class DashboardHome extends Component {
  state = {};
  componentDidMount() {
    Axios.get("/api/projects/statistics").then(result => {
      this.setState({ data: result.data });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="">
          <div
            className="projects-statistics"
            style={{
              minHeight: 400,
              padding: 20
            }}
          >
            <Typography
              variant="h4"
              style={{ paddingBottom: 30 }}
              className="text-center color-5 py-10"
            >
              RIN Projects Statistics
            </Typography>
            <Doughnut data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}
