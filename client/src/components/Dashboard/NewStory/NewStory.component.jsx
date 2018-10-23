import React, { Component } from "react";
import axios from "axios";
import "./NewStory.css";

export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {});
  };

  addStory = () => {
    let story = this.state.story;
    axios
      .post("/api/stories", story)
      .then(function(response) {
        console.log("SUCCESS");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="admin-form">
        <form>
          <label htmlFor="story-title">story title</label> <br />
          <input
            required
            type="text"
            name="title"
            id="story-title"
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="story-text">story text</label> <br />
          <textarea
            rows="4"
            cols="50"
            required
            type="text"
            name="project_description"
            id="story-text"
            onChange={this.onChange}
          />
          <button type="file">
            <p>
              <i className="fas fa-arrow-up" /> upload image
            </p>
          </button>
          <button type="submit" onClick={this.addProject}>
            <p>
              <i className="fas fa-plus" /> add story
            </p>
          </button>
        </form>
      </div>
    );
  }
}
