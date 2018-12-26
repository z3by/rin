import React from "react";
import NoRequests from "./NoRequests.component";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActions, Fab } from "@material-ui/core";

const ProjectRequest = props => {
  return (
    <Card className="flex req-card">
      <CardContent>
        <Typography variant="title" className="capitalize">
          {props.request.name}
        </Typography>
        <Typography variant="subtitle1">{props.request.name}</Typography>
      </CardContent>
      <CardActions>
        <Fab className="req-card-btn" color="secondary">
          <i className="fas fa-times" />
        </Fab>
        <Fab className="req-card-btn" color="dark">
          <i className="fas fa-edit" />
        </Fab>
        <Fab className="req-card-btn" color="primary">
          <i className="fas fa-check" />
        </Fab>
      </CardActions>
    </Card>
  );
};

const ArticleRequest = props => {
  return (
    <Card className="flex req-card">
      <CardContent>
        <Typography variant="title" className="capitalize">
          {props.request.title}
        </Typography>
        <Typography variant="subtitle1">{props.request.subtitle}</Typography>
      </CardContent>
      <CardActions>
        <Fab className="req-card-btn" color="secondary">
          <i className="fas fa-times" />
        </Fab>
        <Fab className="req-card-btn" color="dark">
          <i className="fas fa-edit" />
        </Fab>
        <Fab className="req-card-btn" color="primary">
          <i className="fas fa-check" />
        </Fab>
      </CardActions>
    </Card>
  );
};

export default function RequestList(props) {
  return props.requests.length ? (
    <ul className="requests-list container">
      {props.requests.map(request => {
        return (
          <li>
            {props.itemName === "project" ? (
              <ProjectRequest request={request} />
            ) : (
              <ArticleRequest request={request} />
            )}
          </li>
        );
      })}
    </ul>
  ) : (
    <NoRequests show={true} />
  );
}
