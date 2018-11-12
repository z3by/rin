import React, { Component } from "react";
import "./StoryDetails.css";
import Axios from "axios";

export default class StoryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      story: {
        imgs: [],
        SDGs: []
      }
    };
  }

  componentWillMount() {
    this.getStoryInfo(this.state.id);
    document.body.style.overflowY = "auto";
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
    let SDGs = this.state.story.SDGs.map(sdg => {
      return <li><img className="sdg" src={`/imgs/SDGs/${sdg}.png`} alt="SDG" /></li>
    });

    return (
      <div className="story-details fadeInFast">
        <div
          className="banner-full"
          style={{ backgroundImage: `url(${this.state.story.imgs[0]}` }}
        >
          <h1>{this.state.story.title}</h1>
          <div className="line" />
          <h3>{this.state.story["pre_description"]}</h3>

          <ul className="lensSDGs">
            <li><img className="lens" src={`/imgs/lenses/${this.state.story.lens}.png`} alt="Lens" /></li>
            {SDGs}
          </ul>
        </div>
        <div className="container">
          <p className="p-theme-1">{this.state.story.text}</p>
        </div>
      </div>
    );
  }
}
