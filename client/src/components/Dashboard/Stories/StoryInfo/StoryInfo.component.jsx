import React, { Component } from "react";
import axios from "axios";
import "./StoryInfo.css";

export default class StoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      story: {},
      text: [],
      imgs: []
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
            <td>{this.state.text[0]}</td>
          </tr>
          <tr>
            <th>Story Images</th>
            <td>
              <img className="admin-img" src={this.state.imgs[0]} alt="Story" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
