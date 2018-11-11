import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./StoriesList.css";

export default class StoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allStories: []
    };
  }

  componentWillMount() {
    this.fetchAllStories();
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  fetchAllStories = () => {
    axios.get("/api/stories").then(res => {
      this.setState({ allStories: res.data });
    });
  };

  deleteStory = story => {
    axios
      .delete(`/api/stories/${story.id}`)
      .then(res => {
        this.fetchAllStories();
      })
      .catch(err => {
        console.log("Error deleting a table row");
      });
  };

  render() {
    const stories = this.state.allStories.map(story => {
      return (
        <tr>
          <td>{story.id}</td>
          <td>{story.title}</td>
          <td className="project-options">
            <Link to={`/dashboard/stories/list/${story.id}`}>
              <i className="far fa-eye" />
            </Link>
            <Link to={`/dashboard/stories/list/updatestory/${story.id}`}>
              <i className="fas fa-edit" />
            </Link>
            <a onClick={() => this.deleteStory(story)}>
              <i className="fas fa-trash-alt" />
            </a>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <table class="projects-list-table">
          <thead>
            <tr>
              <th>Story ID</th>
              <th>Story Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{stories}</tbody>
        </table>
      </div>
    );
  }
}
