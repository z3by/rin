import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


class RecipeReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showMmeberInfo = () => {
    this.setState({ isDetailsShown: !this.state.isDetailsShown });
  };

  render() {
    const shown = this.state.isDetailsShown;
    return (
      <div
        className="member-card"
        style={{ overflowY: shown ? "scroll" : "hidden" }}
        >
      <div>
        <Typography variant="overline" className="text-center bg-2 padding-10">
          {this.props.bio.name}
        </Typography>
        <img src={this.props.bio.img} alt="" className="member-img" />
        <Typography className="padding-20 bio-info" variant="body1">
          <Typography className="color-3" variant="subtitle1">
            {this.props.bio.title}
          </Typography>
          {this.props.bio.description}
        </Typography>
        </div>
      </div>
    );
  }
}


export default RecipeReviewCard;
