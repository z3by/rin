import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./requests.css";
import { CardMedia } from "@material-ui/core";
import Axios from "axios";

const NoRequests = props => {
  return (
    props.show && (
      <div className="no-requests">
        <Typography variant="h6" className="color-2">
          No requests yet
        </Typography>
        <img
          src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Inbox-Empty-icon.png"
          alt=""
        />
      </div>
    )
  );
};

const Request = props => {
  return (
    <Card style={{ marginBottom: 10 }}>
      <CardMedia image={props.request.img} style={{ height: 200 }} />
      <CardContent>
        <Typography variant="h6">{props.request.title}</Typography>
        <Typography variant="subtitle2" className="color-3">
          {props.request.subtitle}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            props.handleAccept(props.request.id, props.itemName);
          }}
        >
          <i className="fas fa-check" style={{ color: "green" }} />
        </Button>
        <Button
          onClick={() => {
            props.handleUpdate(props.request.id, props.itemName);
          }}
        >
          <i className="fas fa-edit" style={{ color: "royalblue" }} />
        </Button>
        <Button
          onClick={() => {
            props.handleReject(props.request.id, props.itemName);
          }}
        >
          <i className="fas fa-times" style={{ color: "crimson" }} />
        </Button>
      </CardActions>
    </Card>
  );
};

const RequestsList = props => {
  return (
    <div className="container requests-list">
      <Typography variant="h4" className="upper text-center">
        {props.itemName + "s Requests"}
      </Typography>
      <hr color="lightgray" style={{ marginBottom: 50 }} />
      {!props.requests.length ? (
        <NoRequests show={true} />
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }} className="grid-4">
          {props.requests.map((request, i) => {
            return (
              <li key={i}>
                <Request request={request} itemName={props.itemName} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectRequests: [],
      articleRequests: []
    };
  }

  componentDidMount() {
    this.fetchRequests("article");
    this.fetchRequests("project");
  }

  fetchRequests = itemName => {
    const url = `/api/requests/${itemName}s`;
    Axios.get(url)
      .then(result => {
        const stateKey = itemName + "Requests";
        this.setState({ [stateKey]: result.data.rows });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const projectRequests = [];
    const articleRequests = [];
    this.state.projectRequests.forEach(project => {
      const request = {
        id: project.id,
        title: project.name,
        subtitle: project.organization,
        img: project.img
      };
      projectRequests.push(request);
    });

    this.state.articleRequests.forEach(article => {
      const request = {
        id: article.id,
        title: article.title,
        subtitle: article.subtitle,
        img: article.img
      };
      articleRequests.push(request);
    });
    return (
      <div>
        <RequestsList requests={projectRequests} itemName={"project"} />
        <RequestsList
          requests={articleRequests}
          handleAccept={this.handleAccept}
          itemName={"article"}
        />
      </div>
    );
  }
}
