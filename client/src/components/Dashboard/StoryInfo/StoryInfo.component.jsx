import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Axios from "axios";
import "./StoryInfo.css";

export default class StoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyData: {}
    };
  }

  componentDidMount() {
    this.fetchStory();
  }

  fetchStory = () => {
    const StoryId = this.props.match.params.id;
    Axios.get("/api/stories/" + StoryId).then(result => {
      this.setState({ storyData: result.data[0] });
    });
  };

  render() {
    const story = this.state.storyData;
    return (
      <Paper style={{ padding: 20 }} style={{ position: "relative" }}>
        <img src={story.img} className="w-100" alt="" />
        <div className="story-header">
          <Typography
            variant="h1"
            className="color-1 capitalize text-center"
            style={{
              fontWeight: "bolder",
              background: "var(--color-2)",
              padding: 10
            }}
          >
            {story.buisness}
          </Typography>
          <Typography
            variant="h3"
            className="color-1 capitalize text-center"
            style={{ background: "var(--color-4)", padding: 10 }}
          >
            {story.buisnessDescription}
          </Typography>
        </div>
        <div className="container">
          <Typography variant="body1" className="color-5">
            {story.storyText}
          </Typography>
        </div>
      </Paper>
    );
  }
}
