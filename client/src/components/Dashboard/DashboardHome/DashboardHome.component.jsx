import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Card, CardContent, Typography } from "@material-ui/core";
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
        <div className="projects-statistics">
          <Typography variant="h4" className="text-center color-3 py-10">
            RIN Projects Statistics
          </Typography>
          <Card className="col">
            <CardContent>
              <Doughnut data={this.state.data} />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
