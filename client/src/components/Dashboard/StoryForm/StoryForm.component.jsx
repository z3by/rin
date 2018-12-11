import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import AutoComplete from "../../general-components/AutoComplete/SingleAutoComplete.component";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";

export default class StoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      updating: false,
      story: {},
      projects: []
    };
  }
  componentDidMount() {
    this.checkIfDataIsPassed();
    this.fetchProjectsNames();
  }

  fetchProjectsNames = () => {
    Axios.get("/api/projects/names").then(result => {
      this.setState({ projects: result.data });
    });
  };

  checkIfDataIsPassed = () => {
    if (!!this.props.match.params.id) {
      this.fetchStoryInfo(this.props.match.params.id);
      this.setState({ updating: true });
    }
  };

  fetchStoryInfo = id => {
    Axios.get("/api/stories/" + id).then(result => {
      this.setState(
        {
          story: {
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
      story: {
        ...this.state.story,
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
      this.updateStory();
    } else {
      this.createStory();
    }
  };

  updateStory = () => {
    Axios.put("/api/stories/" + this.state.story.id, this.state.story)
      .then(result => {
        this.props.history.push("/dashboard/stories");
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  createStory = () => {
    Axios.post("/api/stories", this.state.story)
      .then(result => {
        this.props.history.push("/dashboard/stories");
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
          story: {
            ...this.state.story,
            img: imageURL
          }
        });
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  setChoosenValue = project => {
    this.setState({ story: { ...this.state.story, projectId: project.id } });
  };

  render() {
    return (
      <div>
        <Form
          id="story-form"
          onFormSubmit={this.onFormSubmit}
          adding={this.state.adding}
        >
          <Typography variant="h5" style={{ marginBottom: 50 }}>
            Add the story info here Please...
          </Typography>
          <AutoComplete
            setChoosenValue={this.setChoosenValue}
            label="project"
            suggestions={this.state.projects}
          />
          <TextField
            className="full-width-input"
            label="Buisness"
            InputLabelProps={{
              shrink: true
            }}
            name="buisness"
            required
            value={this.state.story.buisness}
            error={!this.checkIfFieldIsValid("buisness")}
            onChange={this.onChange}
          />
          <TextField
            className="full-width-input"
            value={this.state.story.buisnessDescription}
            InputLabelProps={{
              shrink: true
            }}
            required
            error={!this.checkIfFieldIsValid("buisnessDescription")}
            label="Buisness Description"
            onChange={this.onChange}
            name="buisnessDescription"
          />
          <Typography variant="h5" style={{ marginTop: 50 }}>
            choose a good image for the story to upload
          </Typography>

          <div className="img-upload-group">
            <div
              className="img-upload-preveiw"
              style={{
                height: 40,
                width: 40,
                marginRight: 10,
                backgroundImage: "url(" + this.state.story.img + ")"
              }}
            />

            <TextField
              style={{ marginTop: 0 }}
              className=""
              name="img"
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
            label="Story Text"
            name="storyText"
            error={!this.checkIfFieldIsValid("text")}
            value={this.state.story.storyText}
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
