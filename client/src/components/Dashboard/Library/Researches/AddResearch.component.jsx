import React, { Component } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";

export default class AddResearch extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subtitle: "",
      img: "",
      url: "",
      loading: false,
      formValid: false,
      uploaded: false
    };
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  enableAddButton = () => {
    this.setState({
      formValid: true
    });
  };

  disableAddButton = () => {
    this.setState({
      formValid: false
    });
  };

  checkButtonAvailability = () => {
    const state = this.state;
    // check if the user added all required input
    const isValid = state.title && state.subtitle && state.img && state.url;

    if (isValid) {
      this.enableAddButton();
    } else {
      this.disableAddButton();
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.checkButtonAvailability();
    });
  };

  addLink = e => {
    e.preventDefault();

    let linkData = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      url: this.state.url,
      img: this.state.img
    };
    axios
      .post("/api/library/researches", linkData)
      .then(response => {
        document.querySelector(".admin-form form").reset();

        this.setState({
          img: "",
          uploaded: true,
          formValid: false
        });

        setTimeout(() => {
          this.setState({
            uploaded: false
          });
          this.props.history.push("/dashboard/library/researches");
        }, 3000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // upload image to the storage
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
          this.checkButtonAvailability();
        }
      );
    });
  };

  render() {
    return (
      <div className="fadeInFast">
        <Paper className="admin-form">
          <form onSubmit={this.addLink}>
            <h4 className="color-2">Fill the Research info here please...</h4>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Research Title"
              onChange={this.onChange}
            />
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              placeholder="Research subtitle"
              onChange={this.onChange}
            />
            <input
              type="text"
              name="url"
              id="url"
              placeholder="Research URL"
              onChange={this.onChange}
            />
            <label htmlFor="img">Upload image..</label>
            <input
              type="file"
              name="img"
              placeholder="Upload Image"
              accept="image/*"
              onChange={this.onChangeImg}
            />
            <img className="admin-img-update" src={this.state.img} alt="" />
            <img
              src="/imgs/loading.gif"
              alt=""
              className="loading"
              style={{ display: this.state.loading ? "block" : "none" }}
            />

            <button
              type="submit"
              className="btn-admin"
              disabled={!this.state.formValid}
            >
              <i className="fas fa-plus" /> Add Research
            </button>
            <div
              className="done-img"
              style={{ opacity: this.state.uploaded ? "1" : "0" }}
            >
              <img src="/imgs/done.gif" alt="" />
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}
