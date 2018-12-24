import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { CardMedia } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default props => {
  return (
    <Card style={{ marginBottom: 10 }}>
      <CardMedia image={props.request.img} style={{ height: 200 }} />
      <CardContent>
        <Typography variant="h6">{props.request.title}</Typography>
        <Typography variant="subtitle2" className="color-3">
          {props.request.subtitle}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
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
