import React, { Component } from "react";
import "./Stories.css";
import Story from "./Story/Story.component";
import Axios from "axios";

class Stories extends Component {
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
    Axios.get("/api/stories").then(res => {
      this.setState({
        stories: res.data
      });
    });
  };
  // handle the down arrow btn
  goTop = () => {
    document.querySelector(".header").scrollIntoView({
      behavior: "smooth"
    });
  };

  render() {
    const stories = this.state.stories;
    //map the stories
    const storiesInfo = stories.map((story, id) => {
      return <Story story={story} key={id} index={id} />;
    });
    return (
      <div className="stories fadeInFast">
        <div className="header">
          <div className="header-text">
            <h1 className="color-1">Success Stories</h1>
          </div>
        </div>

        <div className="story-items container">{[storiesInfo]}</div>
        <div className="back-to-top" onClick={this.goTop}>
          <i className="fas fa-arrow-circle-up" />
        </div>
      </div>
    );
  }
}

export default Stories;
