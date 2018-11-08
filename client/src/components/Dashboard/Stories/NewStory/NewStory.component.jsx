import React, { Component } from "react";
import axios from "axios";
import "./NewStory.css";

export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lenses: [
        "refugee-owned",
        "refugee-led",
        "refugee-supporting",
        "refugee-supporting, host weighted",
        "lending facilities",
        "refugee funds"
      ],
      title: "",
      pre_description: "",
      lens: "",
      text: "",
      img: "",
      loading: false
    };
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  enableAddButton = () => {
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

  disableAddButton = () => {
    document.querySelector(".btn-admin").disabled = true;
    document.querySelector(".btn-admin").style.backgroundColor = "#666";
  };

  checkButtonAvailability = () => {
    if (
      this.state.title &&
      this.state.pre_description &&
      this.state.lens &&
      this.state.text &&
      this.state.img
    ) {
      this.enableAddButton();
    } else {
      this.disableAddButton();
    }
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
      this.checkButtonAvailability();
    });
  };

  addStory = e => {
    e.preventDefault();
    let storyData = {
      title: this.state.title,
      pre_description: this.state.pre_description,
      lens: this.state.lens,
      text: [this.state.text],
      imgs: [this.state.img]
    };

    axios
      .post("/api/stories", storyData)
      .then(response => {
        document.querySelector(".admin-form form").reset();
        document.querySelector(".done-img").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".done-img").style.display = "none";
        }, 3000);
      })
      .catch(error => {
        console.log(error);
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
          img: imageURL,
          loading: false
        },
        () => {
          console.log(this.state);
          this.checkButtonAvailability();
        }
      );
    });
  };

  render() {
    let lenses = this.state.lenses.map((lens, i) => {
      return (
        <option value={lens} key={i}>
          {lens}
        </option>
      );
    });

    return (
      <div className="admin-form">
        <form onSubmit={this.addStory}>
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
          <label htmlFor="story-pre_description">
            story pre-description
          </label>{" "}
          <br />
          <input
            required
            type="text"
            name="pre_description"
            id="story-pre_description"
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="lens">Story Lens</label> <br />
          <select name="lens" id="lens" onChange={this.onChange} required>
            <option>Select Lens</option>
            {lenses}
          </select>
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
            onChange={this.onChange}
          />
          <br />
          <br />
          <label htmlFor="image">add image for the story</label> <br />
          <input
            required
            type="file"
            name="img"
            accept="image/*"
            onChange={this.onChangeImg}
          />
          <img className="admin-img-update" src={this.state.img} />
          <img
            src="/imgs/loading.gif"
            alt=""
            className="loading"
            style={{ display: this.state.loading ? "block" : "none" }}
          />
          <button type="submit" className="btn-admin" disabled>
            <p>
              <i className="fas fa-plus" /> Add Story
            </p>
          </button>
          <div className="done-img">
            <img src="/imgs/done.gif" alt="" />
          </div>
        </form>
        <div className="done-img">
          <img src="/imgs/done.gif" alt="" />
        </div>
      </div>
    );
  }
}
