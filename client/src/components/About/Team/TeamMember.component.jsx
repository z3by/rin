import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  header: {
    height: "auto"
  },
  actions: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !this.state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className="margin-20">
        <CardHeader
          avatar={
            <Avatar
              aria-label="Recipe"
              src={this.props.bio.img}
              className={classes.avatar}
            >
              R
            </Avatar>
          }
          title={this.props.bio.name}
        />
        <CardMedia
          style={{ height: this.props.imgHeight }}
          image={this.props.bio.img}
          title="Paella dish"
        />

        <CardActions className={classes.actions} disableActionSpacing>
          <Button onClick={this.handleExpandClick}>Read More...</Button>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
