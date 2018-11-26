import React, { Component } from "react";
import axios from "axios";
import "./UpdateArticle.css";
import Paper from "@material-ui/core/Paper";

export default class UpdateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      title: "",
      subtitle: "",
      text: "",
      img: "",
      loading: false,
      formValid: false,
      uploaded: false
    };
  }

  componentWillMount() {
    this.getArticle(this.state.id);
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }
  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.checkButtonAvailability();
    });
  };

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
    const isValid = state.title && state.subtitle && state.text && state.img;

    if (isValid) {
      this.enableAddButton();
    } else {
      this.disableAddButton();
    }
  };

  updateArticle = (e, id) => {
    e.preventDefault();
    let { title, subtitle, text, img } = this.state;
    const articleData = { title, subtitle, text, imgs: [img] };

    axios
      .put(`/api/articles/${id}`, articleData)
      .then(response => {
        document.querySelector(".admin-form form").reset();
        this.setState({
          uploaded: true,
          formValid: false,
          img: ""
        });

        setTimeout(() => {
          this.setState({
            uploaded: false
          });
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
          this.checkButtonAvailability();
        }
      );
    });
  };

  getArticle = id => {
    axios.get(`/api/articles/${id}`).then(res => {
      this.setState(
        {
          article: res.data[0]
        },
        () => {
          this.setState({
            title: res.data[0]["title"],
            subtitle: res.data[0]["subtitle"],
            text: res.data[0]["text"],
            img: res.data[0]["imgs"][0]
          });
        }
      );
    });
  };

  render() {
    return (
      <Paper className="admin-form fadeInFast">
        <form
          onSubmit={e => {
            this.updateArticle(e, this.state.id);
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Article Title"
            id="Article-title"
            onChange={this.onChange}
            value={this.state.title}
          />
          <input
            type="text"
            placeholder="Article Description"
            name="subtitle"
            id="Article-subtitle"
            onChange={this.onChange}
            value={this.state.subtitle}
          />
          <textarea
            placeholder="Article Text"
            rows="4"
            cols="50"
            type="text"
            name="text"
            id="Article-text"
            onChange={this.onChange}
            value={this.state.text}
          />

          <br />
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={this.onChangeImg}
          />
          <img
            className="admin-img-update"
            src={this.state.img}
            alt=""
            style={{ opacity: this.state.uploaded ? "0" : "1" }}
          />
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
            <i className="fas fa-plus" /> Add Article
          </button>
          <div
            className="done-img"
            style={{ opacity: this.state.uploaded ? "1" : "0" }}
          >
            <img src="/imgs/done.gif" alt="" />
          </div>
        </form>
      </Paper>
    );
  }
}
