import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Request from "./RequestCard.component";
import NoRequests from "./NoRequests.component";
import Axios from "axios";

export default class RequestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }

  componentDidMount() {
    Axios.get(`/api/requests/${this.props.itemName}s`)
      .then(res => {
        if (this.props.itemName === "project") {
          const projects = res.data.rows.map(project => {
            return {
              id: project.id,
              title: project.name,
              subtitle: project.organization,
              img: project.img
            };
          });
          this.setState({ requests: projects });
        } else {
          this.setState({ requests: res.data.rows });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container requests-list">
        <Typography variant="h4" className="upper text-center">
          {this.props.itemName + "s Requests"}
        </Typography>
        <hr color="lightgray" style={{ marginBottom: 50 }} />
        {!this.state.requests.length ? (
          <NoRequests show={true} />
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {this.state.requests.map((request, i) => {
              return (
                <li key={i}>
                  <Request
                    request={request}
                    handleAccept={this.state.requests.handleAccept}
                    itemName={this.state.requests.itemName}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
