import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import "./StoryInfo.css";
import draftToHtml from "draftjs-to-html";
import renderHTML from "react-render-html";

export default class StoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyData: {},
      myText: ""
    };
  }

  componentDidMount() {
    this.fetchStory();
  }

  fetchStory = () => {
    const StoryId = this.props.match.params.id;
    Axios.get("/api/stories/" + StoryId).then(result => {
      this.setState({ storyData: result.data[0] }, () => {
        // this.setState({ storyData: { ...this.state.storyData, storyText: draftToHtml(JSON.parse(this.state.storyData.storyText)) } }, () => {
        // });
        this.setState({
          myText: draftToHtml(JSON.parse(this.state.storyData.storyText))
        });
      });
    });
  };

  render() {
    let story = this.state.storyData;
    let { myText } = this.state;

    return (
      <Paper style={{ position: "relative" }}>
        <div
          className="header-img"
          style={{
            backgroundImage: "url(" + story.img + ")"
          }}
        />
        <div className="story-header">
          <Typography
            variant="h3"
            className="color-1 upper text-center"
            style={{
              fontWeight: "bolder",
              padding: 10
            }}
          >
            {story.buisness}
          </Typography>
          <Typography
            variant="h5"
            className="color-1 capitalize text-center"
            style={{ padding: 10 }}
          >
            {story.buisnessDescription}
          </Typography>
        </div>
        <div className="container">{renderHTML(myText)}</div>
      </Paper>
    );
  }
}
