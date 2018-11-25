import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = theme => ({
  card: {
    display: "flex"
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

function BookItem(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardActionArea>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" className="capitalize">
              {props.book.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.book.subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.book.img}
        title={props.book.subtitle}
      />
    </Card>
  );
}

BookItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(BookItem);
