import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

export default class NewsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      updating: false,
      news: {},
      uploading: {}
    };
  }
  componentDidMount() {
    this.checkIfDataIsPassed();
  }

  checkIfDataIsPassed = () => {
    if (!!this.props.match.params.id) {
      this.fetchNewsInfo(this.props.match.params.id);
      this.setState({ updating: true });
    }
  };

  fetchNewsInfo = id => {
    Axios.get("/api/news/" + id).then(result => {
      this.setState(
        {
          news: {
            ...result.data[0]
          },
          adding: true
        },
        () => {
          this.setState({ adding: false });
        }
      );
    });
  };

  onChange = e => {
    this.setState({
      news: {
        ...this.state.news,
        [e.target.name]: e.target.value
      }
    });
  };

  // for demo ONLY
  checkIfFieldIsValid = name => {
    return true;
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.updating) {
      this.updateNews();
    } else {
      this.createNews();
    }
  };

  updateNews = () => {
    Axios.put("/api/news/" + this.state.news.id, this.state.news)
      .then(result => {
        this.props.history.push("/dashboard/news");
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  createNews = () => {
    this.setState({ adding: true });
    Axios.post("/api/news", this.state.news)
      .then(result => {
        this.props.history.push("/dashboard/news");
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  showErrorMessage = msg => {
    alert(msg);
  };

  uploadImage = e => {
    e.preventDefault();
    const imgSize = e.target.files[0].size;
    if (imgSize > 1000000) {
      return this.showErrorMessage(
        "this image is too large ! max size is 1 mb"
      );
    }

    const formData = new FormData();
    this.setState({ uploading: { imgUrl: true } });
    formData.append("img", e.target.files[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    Axios.post("/api/upload/img", formData, config)
      .then(res => {
        const imageURL = res.data.location;
        this.setState({
          news: {
            ...this.state.news,
            imgUrl: imageURL
          },
          uploading: { imgUrl: false }
        });
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  uploadNews = e => {
    e.preventDefault();
    this.setState({ uploading: { newsUrl: true } });
    const formData = new FormData();
    formData.append("pdf", e.target.files[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    Axios.post("/api/upload/pdf", formData, config)
      .then(res => {
        const pdfUrl = res.data.location;
        this.setState({
          news: {
            ...this.state.news,
            newsUrl: pdfUrl
          },
          uploading: { newsUrl: false }
        });
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  render() {
    return (
      <div>
        <Form
          id="news-form"
          onFormSubmit={this.onFormSubmit}
          adding={this.state.adding}
        >
          <Typography variant="h5" style={{ marginBottom: 50 }}>
            Add the the article info here Please...
          </Typography>

          <TextField
            className="full-width-input"
            label="news article title"
            InputLabelProps={{
              shrink: true
            }}
            name="title"
            required
            value={this.state.news.title}
            error={!this.checkIfFieldIsValid("title")}
            onChange={this.onChange}
          />
          <TextField
            className="full-width-input"
            value={this.state.news.subtitle}
            InputLabelProps={{
              shrink: true
            }}
            required
            error={!this.checkIfFieldIsValid("subtitle")}
            label="news article subtitle"
            onChange={this.onChange}
            name="subtitle"
          />
          <TextField
            className="full-width-input"
            value={this.state.news.url}
            InputLabelProps={{
              shrink: true
            }}
            required
            type="url"
            error={!this.checkIfFieldIsValid("url")}
            label="news article link"
            onChange={this.onChange}
            name="url"
          />
          <div className="img-upload-group">
            <Avatar
              className="img-upload-preveiw"
              src={
                this.state.uploading.imgUrl
                  ? "/imgs/loading.gif"
                  : this.state.news.imgUrl
                  ? this.state.news.imgUrl
                  : "https://beedie.sfu.ca/corporate-governance-blog/wp-content/themes/newsroom13/img/placeholder.png"
              }
            />

            <TextField
              style={{ marginTop: 0 }}
              className="full-width-input"
              helperText="max size 1.mb"
              name="imgUrl"
              label="upload cover image"
              variant="filled"
              required={this.state.updating ? false : true}
              InputLabelProps={{
                shrink: true
              }}
              accept="image/*"
              type="file"
              onChange={this.uploadImage}
            />
          </div>
        </Form>
      </div>
    );
  }
}
