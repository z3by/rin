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
      pre_description: "",
      lenses: [],
      text: [],
      imgs: [],
      loading: false
    };
  }

  componentWillMount() {
    this.getStory(this.state.id);
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  enableUpdateButton = () => {
    document.querySelector(".btn-admin").disabled = false;
    document.querySelector(".btn-admin").style.backgroundColor = "#222";
    document
      .querySelector(".btn-admin")
      .addEventListener("mouseenter", function() {
        document.querySelector(".btn-admin").style.backgroundColor = "#f90";
      });
    document
      .querySelector(".btn-admin")
      .addEventListener("mouseleave", function() {
        document.querySelector(".btn-admin").style.backgroundColor = "#222";
      });
  };

  disableUpdateButton = () => {
    document.querySelector(".btn-admin").disabled = true;
    document.querySelector(".btn-admin").style.backgroundColor = "#666";
  };

  checkButtonAvailability = () => {
    if (
      this.state.title &&
      this.state.pre_description &&
      this.state.text[0] &&
      this.state.imgs[0]
    ) {
      this.enableUpdateButton();
    } else {
      this.disableUpdateButton();
    }
  };

  getStory = id => {
    axios.get(`/api/stories/${id}`).then(res => {
      this.setState({
        story: res.data[0]
      });
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.checkButtonAvailability();
    });
  };

  onChangeImg = e => {
    this.setState({
      loading: true
    });

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
      this.setState(
        {
          imgs: [imageURL],
          loading: false
        },
        () => {
          this.checkButtonAvailability();
        }
      );
    });
  };

  onChangeText = e => {
    let txtArr = [...this.state.text];
    txtArr[0] = e.target.value;
    this.setState({ text: txtArr }, () => {
      this.checkButtonAvailability();
    });
  };

  updateStory = e => {
    e.preventDefault();

    let storyData = {
      title: this.state.title,
      pre_description: this.state.pre_description,
      lenses: this.state.lenses,
      text: this.state.text,
      imgs: this.state.imgs
    };

    axios
      .put(`/api/stories/${this.state.id}`, storyData)
      .then(function(response) {
        document.querySelector(".done-img").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".done-img").style.display = "none";
        }, 3000);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="admin-form">
        <form method="POST" onSubmit={this.updateStory}>
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
          <label htmlFor="story-pre_description">
            story pre-description
          </label>{" "}
          <br />
          <input
            required
            type="text"
            name="pre_description"
            id="story-pre_description"
            value={this.state.pre_description}
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="story-text">story text</label> <br />
          <textarea
            required
            rows="4"
            cols="50"
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
            alt="uploaded"
          />
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={this.onChangeImg}
          />
          <img
            src="/imgs/loading.gif"
            alt=""
            className="loading"
            style={{ display: this.state.loading ? "block" : "none" }}
          />
          <button type="submit" className="btn-admin" disabled>
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
