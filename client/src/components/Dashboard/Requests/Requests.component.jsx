import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./requests.css";
import { CardMedia } from "@material-ui/core";
import Axios from "axios";

export default class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectRequests: [],
      articleRequests: []
    };
  }

  handleAccept = (id, itemName) => {
    const url = `/api/${itemName}s/${id}`;

    Axios.put(url, { pending: false })
      .then(() => {
        this.props.fetchRequests(itemName);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <RequestsList
          handleAccept={this.handleAccept}
          requests={this.props.projectRequests}
          itemName={"project"}
        />
      </div>
    );
  }
}
