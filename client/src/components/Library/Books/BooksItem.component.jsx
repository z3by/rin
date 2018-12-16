import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Button } from "@material-ui/core";

const styles = () => ({
  card: {
    display: "flex",
    minHeight: 300
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 300
  }
});

function MediaControlCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className="capitalize">
            {props.info.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.info.subtitle}
          </Typography>
          <a href={props.info.bookUrl} className="color-3">
            {props.info.bookUrl}
          </a>
        </CardContent>
        <Button
          style={{
            padding: "20px",
            background: "var(--color-2)",
            color: "white"
          }}
        >
          <a href={props.info.bookUrl} download className="color-1">
            download
          </a>
        </Button>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.info.coverUrl}
        title={props.info.subtitle}
      />
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
