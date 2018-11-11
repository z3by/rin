import React, { Component } from "react";
import axios from "axios";
import "./StoryInfo.css";

export default class StoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      story: {
        imgs: []
      },
      imgs: ""
    };
  }

  componentWillMount() {
    this.getStory(this.state.id);
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  getStory = id => {
    axios.get(`/api/stories/${id}`).then(res => {
      this.setState({
        story: res.data[0]
      });
    });
  };

  render() {
    return (
      <div className="admin-info-single">
        <table>
          <tr>
            <th>Story ID</th>
            <td>{this.state.id}</td>
          </tr>
          <tr>
            <th>Story Tilte</th>
            <td>{this.state.story.title}</td>
          </tr>
          <tr>
            <th>Story Details</th>
            <td>
              <p className="p-theme-1-admin-info">{this.state.story.text}</p>
            </td>
          </tr>
          <tr>
            <th>Story Images</th>
            <td>
              <img className="admin-img" src={this.state.story.imgs[0]} alt="Story" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
