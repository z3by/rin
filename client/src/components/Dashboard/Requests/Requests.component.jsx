import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";

const Request = props => {
  return (
    <Card style={{ marginBottom: 10 }}>
      <CardContent>
        <div
          className="flex-centerd"
          style={{ justifyContent: "space-between" }}
        >
          <div className="flex-centerd">
            <Avatar src={props.request.logo} />
            <Typography
              variant="h6"
              className="color-2"
              style={{ marginLeft: 10 }}
            >
              {props.request.organization}
            </Typography>
          </div>
          <Typography variant="h6">{props.request.name}</Typography>
        </div>
        <CardMedia
          style={{
            height: 300,
            width: "100%",
            marginTop: 10
          }}
          image={props.request.img}
          title="Paella dish"
        />
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        {/* <Button>
          <i className="far fa-eye" />
        </Button> */}

        <Button onClick={props.handleAccept}>
          <i className="fas fa-check" style={{ color: "green" }} />
        </Button>
        {/* <Button>
          <i className="fas fa-edit" style={{ color: "royalblue" }} />
        </Button> */}
        <Button onClick={props.handleReject}>
          <i className="fas fa-times" style={{ color: "crimson" }} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleAccept = id => {
    Axios.get("/api/requests/accept/" + id)
      .then(result => {
        this.props.fetchRequests();
      })
      .catch(err => {
        window.alert(err);
      });
  };

  handleReject = id => {
    const sure = window.confirm(
      "Are you sure you want to reject this request?"
    );
    if (!sure) {
      return;
    }
    Axios.delete("/api/projects/" + id)
      .then(result => {
        this.props.fetchRequests();
      })
      .catch(err => {
        window.alert(err);
      });
  };

  render() {
    const requests = this.props.requests.map(request => {
      return (
        <Request
          request={request}
          fetchRequests={this.props.fetchRequests}
          handleAccept={() => this.handleAccept(request.id)}
          handleReject={() => this.handleReject(request.id)}
        />
      );
    });

    return (
      <div className="container">
        {requests.length ? (
          requests
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography variant="h3" className="color-3">
              No requests yet
            </Typography>
            <img
              src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
              alt=""
              style={{ marginLeft: 20, width: "100px" }}
            />
          </div>
        )}
      </div>
    );
  }
}
