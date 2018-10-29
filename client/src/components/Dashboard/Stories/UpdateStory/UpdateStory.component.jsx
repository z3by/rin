import React, { Component } from "react";
import axios from "axios";
import "./UpdateStory.css";

export default class UpdateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      story: {},
      title: "",
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
      this.setState({ story: res.data[0] }, () => {
        console.log(this.state.story);
        this.setState({
          title: res.data[0]["title"],
          text: JSON.parse(res.data[0]["text"]),
          imgs: JSON.parse(res.data[0]["imgs"])
        });
      });
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeImg = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", e.target.files[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios.post("/api/upload", formData, config).then(res => {
      const imageURL = res.data.location;
      this.setState({
        imgs: [imageURL]
      });
    });
  };

  onChangeText = e => {
    let txtArr = [...this.state.text];
    txtArr[0] = e.target.value;
    this.setState({ text: txtArr });
  };

  updateStory = e => {
    e.preventDefault();

    let storyData = {
      title: this.state.title,
      text: this.state.text,
      imgs: this.state.imgs
    };

    axios
      .put(`/api/stories/${this.state.id}`, storyData)
      .then(function(response) {
        document.querySelector(".done-img").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".done-img").style.display = "none";
        }, 6000);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="admin-form">
        <form method="POST">
          <label htmlFor="story-title">story title</label> <br />
          <input
            required
            type="text"
            name="title"
            id="story-title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="story-text">story text</label> <br />
          <textarea
            required
            rows="4"
            cols="50"
            required
            type="text"
            name="text"
            id="story-text"
            value={this.state.text[0]}
            onChange={this.onChangeText}
          />
          <label htmlFor="image">Update story image</label> <br />
          <img
            className="admin-img-update"
            src={this.state.imgs[0]}
            alt="Story Image"
          />
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={this.onChangeImg}
          />
          <button type="submit" onClick={this.updateStory}>
            <p>
              <i className="fas fa-plus" /> Update Story
            </p>
          </button>
          <div className="done-img">
            <img src="/imgs/done.gif" alt="" />
          </div>
        </form>
      </div>
    );
  }
}
