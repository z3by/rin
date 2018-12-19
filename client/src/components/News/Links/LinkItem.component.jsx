import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

function MediaControlCard(props) {
  console.log(props.info);

  return (
    <Card style={{ background: "transparent", boxShadow: "none" }}>
      <Typography component="h5" variant="h5">
        {props.info.title}
      </Typography>
      <Typography
        component="p"
        color="textSecondary"
        variant="body1"
        className="capitalize"
      >
        {new Date(props.info.createdAt).toDateString()}
      </Typography>

      <Typography variant="body1">{props.info.subtitle}</Typography>
      <Typography style={{ paddingTop: 20 }}>
        <a
          style={{
            color: "var(--color-2)",
            width: "100%",
            marginTop: 30
          }}
          href={props.info.url}
          target="_blank"
        >
          Read More...
        </a>
      </Typography>
    </Card>
  );
}

export default MediaControlCard;
