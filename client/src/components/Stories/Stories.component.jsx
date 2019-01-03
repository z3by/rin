import React, { Component } from "react";
import "./Stories.css";
import Story from "./Story/Story.component";
import Axios from "axios";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Footer from "../Footer/Footer.component";
import SocialLinks from "../Landing/socialLinks.component";
import Logo from "../Landing/Logo.component";
import { Typography } from "@material-ui/core";

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
      <React.Fragment>
        <div className="stories fadeInFast">
          <Logo />
          <SocialLinks />
          <header>
            <div className="header">
              <video src="/videos/camp.mp4" autoPlay muted loop />
              <Typography variant="h1" className="hero-title upper color-2">Success Stories</Typography>
              <Typography variant="h5" className="hero-subtitle color-1">
                every-day stories proving that refugees are investable
              </Typography>
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default Stories;
