import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default props => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <div
            className="card-header"
            style={{
              background: "url(" + props.info.img + "+"
            }}
          />
          <Typography gutterBottom variant="h5" component="h2">
            {props.info.title}
          </Typography>
          <Typography component="p">{props.info.subtitle}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
