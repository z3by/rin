import React, { Component } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";

export default class AddBook extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subtitle: "",
      img: "",
      url: "",
      loading: false,
      loading2: false,
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
      .post("/api/library/books", linkData)
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
          this.props.history.push("/dashboard/library/books");
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

  // upload PDF to the storage
  onChangePDF = e => {
    this.setState({
      loading2: true
    });
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdf", e.target.files[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios.post("/api/uploadpdf", formData, config).then(res => {
      const bookURL = res.data.location;

      this.setState(
        {
          url: bookURL,
          loading2: false
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
            <h4 className="color-2">Fill the book info here</h4>
            <input
              required
              type="text"
              name="title"
              id="title"
              placeholder="Book Title"
              onChange={this.onChange}
            />
            <input
              required
              type="text"
              name="subtitle"
              id="subtitle"
              placeholder="Book subtitle"
              onChange={this.onChange}
            />

            <label htmlFor="img">Upload PDF file..</label>
            <input
              required
              type="file"
              name="url"
              placeholder="Upload PDF"
              accept="application/pdf,application/vnd.ms-excel"
              onChange={this.onChangePDF}
            />
            <img
              src="/imgs/loading.gif"
              alt=""
              className="loading"
              style={{ display: this.state.loading2 ? "block" : "none" }}
            />

            <label htmlFor="img">Upload image..</label>
            <input
              required
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
              <i className="fas fa-plus" /> Add Book
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
