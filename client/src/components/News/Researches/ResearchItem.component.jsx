import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function MediaControlCard(props) {
  let year = new Date(props.info.year).getFullYear();

  return (
    <Card
      style={{
        margin: 0,
        position: "relative",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <CardContent style={{ width: "100%" }}>
        <Typography variant="h6" className="capitalize text-center">
          {props.info.title}
        </Typography>
        <Typography variant="subtitle1" className="color-3 text-center">
          {props.info.subtitle}
        </Typography>
        <Typography variant="body2" className="color-3">
          Publisher: {props.info.publisher}
        </Typography>
        <Typography variant="body2" className="color-3">
          Year: {year}
        </Typography>
        <Typography variant="body2" className="color-3">
          Pages: {props.info.pages}
        </Typography>
        <CardActions style={{ padding: 0, margin: "20px 0" }}>
          <a href={props.info.researchUrl} target="_blank" download>
            <Button
              style={{ background: "var(--color-2)" }}
              className="color-1"
            >
              Download
            </Button>
          </a>
        </CardActions>
      </CardContent>
      <CardMedia image={props.info.imgUrl} style={{ width: "40%" }} />
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default MediaControlCard;
