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

  goDown = () => {
    document.querySelector(".vertical-line").scrollIntoView({
      behavior: "smooth"
    });
  };

  render() {
    const stories = this.state.stories;
    //map the stories
    const storiesInfo = stories.slice(0, 9).map((story, id) => {
      return <Story story={story} key={id} index={id} />;
    });
    return (
      <div className="stories fadeInFast">
        <header>
          <div className="header">
            <h1 className="header-text color-1">Success Stories</h1>
            <div className="line" />

            <h3 className="color-1">
              Every-day stories proving that refugees are investable
            </h3>
            <div className="go-down" onClick={this.goDown}>
              <i className="fas fa-arrow-circle-down" />
            </div>
          </div>
        </header>

        <div className="vertical-line" />
        <div className="center-stories">
          <img src="/imgs/old-logo.png" alt="" />
        </div>
        <div className="container" id="stories-list">
          {storiesInfo}
          <button>Read More Stories</button>
        </div>
      </div>
    );
  }
}

export default Stories;
