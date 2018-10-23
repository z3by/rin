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
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }, () => {});
  };

  addStory = e => {
    e.preventDefault();
    let story = this.state.story;
    console.log(this.state);

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
          <label htmlFor="image">add image for the story</label> <br />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={this.onChange}
          />
          <button type="submit" onClick={this.addStory}>
            <p>
              <i className="fas fa-plus" /> Add Story
            </p>
          </button>
        </form>
      </div>
    );
  }
}
