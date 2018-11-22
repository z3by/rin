import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

export default props => {
  return (
    <Card className="article-card">
      <CardMedia
        className={"card-img"}
        image={props.article.imgs[0]}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="h4" component="h2" className="capitalize">
          {props.article.title}
        </Typography>
        <Typography color="textSecondary" variant="subtitle1" gutterBottom>
          {props.article.subtitle}
        </Typography>
        <Typography component="p">
          {props.article.text.substr(0, 50)} ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};
