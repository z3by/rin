import React, { Component } from "react";
import "./Stories.css";
import Story from "./Story/Story.component";
import Axios from "axios";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    };
  }
  componentDidMount() {
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
    document.body.scrollBy({
      top: window.innerHeight - document.body.scrollTop,
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
            <video src="/videos/camp.mp4" autoPlay muted loop />
            <h1 className="header-text">Success Stories</h1>
            <div className="line" />

            <h3 className="header-subtitle">
              Every-day stories proving that refugees are investable
            </h3>
            <div className="go-down" onClick={this.goDown}>
              <IconButton onClick={this.goDown}>
                <i className="fas fa-arrow-down color-1" />
              </IconButton>
            </div>
          </div>
        </header>
        <div id="scroll-sign" />
        <div className="vertical-line" />
        <div className="center-stories">
          <img src="/imgs/old-logo.png" alt="" />
        </div>
        <div className="container" id="stories-list">
          {storiesInfo}
          <Link to={"/all-stories"}>
            <button>Read More Stories</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Stories;
