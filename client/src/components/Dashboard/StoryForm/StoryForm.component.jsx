import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import AutoComplete from "../../general-components/AutoComplete/SingleAutoComplete.component";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
import MyEditor from "../../general-components/MyEditor/MyEditor.component";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';


export default class StoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      updating: false,
      editorState: EditorState.createEmpty(),
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

  convertToEditorState = (text) => {
    const html = draftToHtml(JSON.parse(text));
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    this.setState({ editorState });
  }

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
          this.convertToEditorState(this.state.story.storyText);
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

  editText = (storyText) => {
    this.setState({ story: { ...this.state.story, storyText: JSON.stringify(storyText) } });
  }

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

  onEditorStateChange = (editorState) => {
    this.setState({ editorState }, () => {
      const text = convertToRaw(editorState.getCurrentContent());
      this.editText(text);
    });
  }

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
          <MyEditor editorState={this.state.editorState} onEditorStateChange={this.onEditorStateChange} />
        </Form>
      </div>
    );
  }
}
