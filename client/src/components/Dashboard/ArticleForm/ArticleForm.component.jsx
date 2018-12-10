import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";

export default class ArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      updating: false,
      article: {}
    };
  }
  componentDidMount() {
    this.checkIfDataIsPassed();
  }

  checkIfDataIsPassed = () => {
    if (!!this.props.match.params.id) {
      this.fetchArticleInfo(this.props.match.params.id);
      this.setState({ updating: true });
    }
  };

  fetchArticleInfo = id => {
    Axios.get("/api/articles/" + id).then(result => {
      this.setState(
        {
          article: {
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
      article: {
        ...this.state.article,
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
      this.updateArticle();
    } else {
      this.createArticle();
    }
  };

  updateArticle = () => {
    Axios.put("/api/articles/" + this.state.article.id, this.state.article)
      .then(result => {
        this.props.history.push("/dashboard/blog");
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  createArticle = () => {
    this.setState({ adding: true });
    Axios.post("/api/articles", this.state.article)
      .then(result => {
        this.props.history.push("/dashboard/blog");
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  showErrorMessage = messge => {
    alert(messge);
  };

  uploadImage = e => {
    e.preventDefault();
    const formData = new FormData();
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
          article: {
            ...this.state.article,
            img: imageURL
          }
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
          id="article-form"
          onFormSubmit={this.onFormSubmit}
          adding={this.state.adding}
        >
          <Typography variant="h5" style={{ marginBottom: 50 }}>
            Add the article info here Please...
          </Typography>

          <TextField
            className="full-width-input"
            label="Article title"
            InputLabelProps={{
              shrink: true
            }}
            name="title"
            required
            value={this.state.article.title}
            error={!this.checkIfFieldIsValid("title")}
            onChange={this.onChange}
          />
          <TextField
            className="full-width-input"
            value={this.state.article.subtitle}
            InputLabelProps={{
              shrink: true
            }}
            required
            error={!this.checkIfFieldIsValid("subtitle")}
            label="Article subtitle"
            onChange={this.onChange}
            name="subtitle"
          />
          <Typography variant="h5" style={{ marginTop: 50 }}>
            choose a good image for the article to upload
          </Typography>

          <div className="img-upload-group">
            <div
              className="img-upload-preveiw"
              style={{
                height: 40,
                width: 40,
                marginRight: 10,
                backgroundImage: "url(" + this.state.article.img + ")"
              }}
            />

            <TextField
              style={{ marginTop: 0 }}
              className=""
              name="img"
              required
              InputLabelProps={{
                shrink: true
              }}
              type="file"
              accept="image/*"
              required={this.state.updating ? false : true}
              onChange={this.uploadImage}
            />
            <Typography variant="overline">max size 1.mb</Typography>
          </div>

          <TextField
            className="full-width-input"
            label="article Text"
            name="text"
            error={!this.checkIfFieldIsValid("text")}
            value={this.state.article.text}
            multiline
            inputProps={{ maxLength: 1000 }}
            InputLabelProps={{
              shrink: true
            }}
            required
            onChange={this.onChange}
            rowsMax="6"
            variant="outlined"
          />
        </Form>
      </div>
    );
  }
}
