import React from "react";

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
