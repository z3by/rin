import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

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
          image={this.props.article.img}
          title="Paella dish"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h4"
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
        </CardContent>
        <Button
          style={{
            background: "var(--color-2)",
            color: "white",
            display: "block",
            float: "right",
            margin: "0 10px 10px 0"
          }}
          onClick={this.handleExpandClick}
        >
          <Link className="color-1" to={"/blog/" + this.props.article.id}>
            Read More...
          </Link>
        </Button>
      </Card>
    );
  }
}

export default ArticleCard;
