import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    return (
      <Card className="article-card">
        <CardMedia
          className="card-img"
          image={this.props.article.imgs[0]}
          title="Paella dish"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            className="capitalize"
          >
            {this.props.article.title}
          </Typography>

          <Typography
            gutterBottom
            variant="subtitle1"
            component="h2"
            className="color-3"
          >
            {this.props.article.subtitle}
          </Typography>
          <Typography component="p">
            {this.props.article.text.substr(0, 50)} ...
          </Typography>
        </CardContent>
        <CardActions className="" disableActionSpacing>
          <Button
            className=""
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            Read More
            <ExpandMoreIcon />
          </Button>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>{this.props.article.text}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default ArticleCard;
