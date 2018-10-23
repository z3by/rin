import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
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
      this.setState({ allStories: res.data }, () => {
        console.log(this.state.allStories);
      });
    });
  };

  deleteStory = story => {
    axios
      .delete(`/api/stories/${story.id}`)
      .then(res => {
        console.log("Deleted Successfully");
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
              <i className="far fa-eye" /> show
            </Link>
            <a>
              <i className="fas fa-edit" />
              update
            </a>
            <a onClick={() => this.deleteStory(story)}>
              <i className="fas fa-trash-alt" /> delete
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
              <th>
                <h1>Story ID</h1>
              </th>
              <th>
                <h1>Story Title</h1>
              </th>
              <th>
                <h1>Actions</h1>
              </th>
            </tr>
          </thead>
          <tbody>{stories}</tbody>
        </table>
      </div>
    );
  }
}
