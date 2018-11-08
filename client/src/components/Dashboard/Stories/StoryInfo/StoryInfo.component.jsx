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
      <div>
        <table className="admin-table">
          <tr>
            <th>Story ID</th>
            <td>
              <p className="p-theme-1-admin-info">{this.state.id}</p>
            </td>
          </tr>
          <tr>
            <th>Story Tilte</th>
            <td>
              <p className="p-theme-1-admin-info">{this.state.story.title}</p>
            </td>
          </tr>
          <tr>
            <th>Story Details</th>
            <td>
              <p className="p-theme-1-admin-info">{this.state.text[0]}</p>
            </td>
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
