import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

export default class ResearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      updating: false,
      research: {},
      uploading: {}
    };
  }
  componentDidMount() {
    this.checkIfDataIsPassed();
  }

  checkIfDataIsPassed = () => {
    if (!!this.props.match.params.id) {
      this.fetchResearchInfo(this.props.match.params.id);
      this.setState({ updating: true });
    }
  };

  fetchResearchInfo = id => {
    Axios.get("/api/researches/" + id).then(result => {
      this.setState(
        {
          research: {
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
      research: {
        ...this.state.research,
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
      this.updateResearch();
    } else {
      this.createResearch();
    }
  };

  updateResearch = () => {
    Axios.put("/api/researches/" + this.state.research.id, this.state.research)
      .then(result => {
        this.props.history.push("/dashboard/researches");
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  createResearch = () => {
    this.setState({ adding: true });
    Axios.post("/api/researches", this.state.research)
      .then(result => {
        this.props.history.push("/dashboard/researches");
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
          research: {
            ...this.state.research,
            imgUrl: imageURL
          },
          uploading: { imgUrl: false }
        });
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  uploadResearch = e => {
    e.preventDefault();
    this.setState({ uploading: { researchUrl: true } });
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
          research: {
            ...this.state.research,
            researchUrl: pdfUrl
          },
          uploading: { researchUrl: false }
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
          id="research-form"
          onFormSubmit={this.onFormSubmit}
          adding={this.state.adding}
        >
          <Typography variant="h5" style={{ marginBottom: 50 }}>
            Add the research info here Please...
          </Typography>

          <TextField
            className="full-width-input"
            label="research title"
            InputLabelProps={{
              shrink: true
            }}
            name="title"
            required
            value={this.state.research.title}
            error={!this.checkIfFieldIsValid("title")}
            onChange={this.onChange}
          />
          <TextField
            className="full-width-input"
            value={this.state.research.subtitle}
            InputLabelProps={{
              shrink: true
            }}
            required
            error={!this.checkIfFieldIsValid("subtitle")}
            label="research subtitle"
            onChange={this.onChange}
            name="subtitle"
          />
          <TextField
            className="full-width-input"
            value={this.state.research.publisher}
            InputLabelProps={{
              shrink: true
            }}
            required
            error={!this.checkIfFieldIsValid("publisher")}
            label="research publisher"
            onChange={this.onChange}
            name="publisher"
          />
          <TextField
            className="full-width-input"
            label="year"
            type="date"
            variant="outlined"
            defaultValue={this.state.research.year}
            value={this.state.research.year}
            required
            name="year"
            InputLabelProps={{
              shrink: true
            }}
            onChange={this.onChange}
          />
          <TextField
            className="full-width-input"
            label="pages number"
            type="number"
            variant="outlined"
            value={this.state.research.pages}
            required
            name="pages"
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              min: 0
            }}
            onChange={this.onChange}
          />
          <div className="img-upload-group">
            <Avatar
              className="img-upload-preveiw"
              src={
                this.state.uploading.imgUrl
                  ? "/imgs/loading.gif"
                  : this.state.research.imgUrl
                  ? this.state.research.imgUrl
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

          <div className="img-upload-group">
            <Avatar
              className="img-upload-preveiw"
              src={
                this.state.uploading.researchUrl
                  ? "/imgs/loading.gif"
                  : "/imgs/book_placeholder.png"
              }
            />
            <TextField
              style={{ marginTop: 0 }}
              className="full-width-input"
              name="researchUrl"
              label="upload research as pdf"
              variant="filled"
              required={this.state.updating ? false : true}
              InputLabelProps={{
                shrink: true
              }}
              accept="application/pdf"
              type="file"
              onChange={this.uploadResearch}
            />
          </div>
        </Form>
      </div>
    );
  }
}
