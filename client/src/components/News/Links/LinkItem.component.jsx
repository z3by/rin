import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function MediaControlCard(props) {
  console.log(props.info);

  return (
    <Card style={{ background: "transparent", boxShadow: "none" }}>
      <Typography component="h5" variant="h5" className="capitalize">
        {props.info.title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {props.info.subtitle}
      </Typography>
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
