import React, { Component } from "react";
import axios from "axios";
import "./NewStory.css";

export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      img: "",
      allTexts: [],
      allImgs: ["https://worldvisionadvocacy.org/wp-content/uploads/2017/10/W220-0005-107_706974.jpg"]
    };
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }, () => { console.log(this.state) });
  }

  addStory = e => {
    e.preventDefault();
    this.setState({ allTexts: [...this.state.allTexts, this.state.text] }, () => {
      //console.log(this.state.allTexts) 
      let storyData = {
        title: this.state.title,
        text: this.state.allTexts,
        imgs: this.state.allImgs
      }

      axios
        .post("/api/stories", storyData)
        .then(function (response) {
          document.querySelector(".admin-form form").reset();
          document.querySelector(".done-img").style.display = "flex";
          setTimeout(() => {
            document.querySelector(".done-img").style.display = "none";
          }, 6000);
        })
        .catch(function (error) {
          console.log(error);
        });
    });



    // let txt = "";
    // for (let i = 0; i < this.state.text.length; i++) {
    //   if (this.state.text[i] !== "\n") {
    //     txt += this.state.text[i];
    //   }
    //   else {
    //     this.setState({ allTexts: [...this.state.allTexts, txt] }, () => console.log(this.state.allTexts));
    //     txt = "";
    //   }
    // }
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
            required
            rows="4"
            cols="50"
            required
            type="text"
            name="text"
            id="story-text"
            onChange={this.onChange}
          />
          <label htmlFor="image">add image for the story</label> <br />
          <input
            type="file"
            name="img"
            accept="image/*"
          // onChange={this.onChange}
          />
          <button type="submit" onClick={this.addStory}>
            <p>
              <i className="fas fa-plus" /> Add Story
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
