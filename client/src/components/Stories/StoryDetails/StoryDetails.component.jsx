import React, { Component } from "react";
import "./StoryDetails.css";
import Axios from "axios";

export default class StoryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {
        title: "",
        text: [""],
        imgs: [""]
      }
    };
  }

  componentWillMount() {
    this.getStoryInfo(this.props.match.params.id);
  }

  getStoryInfo = id => {
    Axios.get(`/api/stories/${id}`)
      .then(res => {
        console.log(res);

        this.setState({
          story: res.data[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="story-details fadeInFast">
        <div
          className="banner-full"
          style={{ backgroundImage: `url(${this.state.story.imgs[0]}` }}
        >
          <h1>{this.state.story.title}</h1>
          <div className="line" />
          <h3>{this.state.story["pre_description"]}</h3>
        </div>
        <div className="container">
          {this.state.story.text.map(text => {
            return <p className="p-theme-1">{text}</p>;
          })}
        </div>
      </div>
    );
  }
}
