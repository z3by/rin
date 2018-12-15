import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
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
    this.state = {
      memberInfo: {}
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Card
        className="margin-20 member-card"
        onClick={this.props.showMemberInfo}
      >
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
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
