import React from "react";
import NoRequests from "./NoRequests.component";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActions, Fab } from "@material-ui/core";
import Axios from "axios";

class RequestCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAccept = () => {
    const id = this.props.request.id;
    const url = `/api/requests/${this.props.itemName}s/accept/${id}`;

    Axios.put(url)
      .then(res => {
        this.props.fetchReqCount();
      })
      .catch(err => {
        alert(err);
      });
  };

  handleEdit = () => {
    const id = this.props.request.id;
    const url = `/dashboard/update${this.props.itemName}/${id}`;
    this.props.history.push(url);
  };

  handleShow = () => {
    const id = this.props.request.id;
    const url = `/dashboard/${this.props.itemName}s/${id}`;
    this.props.history.push(url);
  };

  handleReject = () => {
    const id = this.props.request.id;
    const url = `/api/${this.props.itemName}s/${id}`;

    Axios.delete(url)
      .then(res => {
        this.props.fetchReqCount();
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    const { title, subtitle } = this.props.wantedFields;

    return (
      <Card className="flex req-card">
        <CardContent>
          <Typography variant="title" className="capitalize">
            {this.props.request[title]}
          </Typography>
          <Typography variant="subtitle1">
            {this.props.request[subtitle]}
          </Typography>
        </CardContent>
        <CardActions>
          <Fab
            className="req-card-btn"
            color="secondary"
            onClick={this.handleReject}
          >
            <i className="fas fa-times" />
          </Fab>
          <Fab
            className="req-card-btn"
            style={{ background: "var(--color-4)" }}
            onClick={this.handleShow}
          >
            <i className="fas fa-eye color-1" />
          </Fab>
          <Fab className="req-card-btn" onClick={this.handleEdit}>
            <i className="fas fa-edit" />
          </Fab>
          <Fab
            className="req-card-btn"
            style={{ background: "var(--color-2)" }}
            onClick={this.handleAccept}
          >
            <i className="fas fa-check" />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default function RequestList(props) {
  return props.requests.length ? (
    <ul className="requests-list container">
      {props.requests.map(request => {
        return (
          <li>
            {props.itemName === "project" ? (
              <RequestCard
                {...props}
                request={request}
                wantedFields={{ title: "name", subtitle: "organization" }}
              />
            ) : (
              <RequestCard
                {...props}
                request={request}
                wantedFields={{ title: "title", subtitle: "subtitle" }}
              />
            )}
          </li>
        );
      })}
    </ul>
  ) : (
    <NoRequests show={true} />
  );
}
