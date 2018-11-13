import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MoreStories.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Axios from "axios";

export default class MoreStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    };
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
    this.fetchStories();
  }

  fetchStories = () => {
    Axios.get("/api/stories")
      .then(res => {
        this.setState({
          stories: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="more-stories">
        <div className="container">
          {this.state.stories.map(story => {
            return (
              <Card className="story-card">
                <CardContent>
                  <h4>{story.title}</h4>
                  <h5>{story.pre_description}</h5>
                  <div
                    className="story-card-img"
                    style={{ backgroundImage: "url(" + story.imgs[0] + ")" }}
                  />
                </CardContent>
                <CardActions>
                  <Link to={`/stories/${story.id}`}>
                    <Button className="color-5">read this story</Button>
                  </Link>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}
