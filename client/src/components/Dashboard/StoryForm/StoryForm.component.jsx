import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
import AutoComplete from "../../general-components/AutoComplete/SingleAutoComplete.component";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import MyEditor from "../../general-components/MyEditor/MyEditor.component";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";

const maxLength = 5000;
const minLength = 25;

export default class StoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      updating: false,
      uploading: {},
      editorState: EditorState.createEmpty(),
      enteredChars: 0,
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

  convertToEditorState = text => {
    const html = draftToHtml(JSON.parse(text));
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);
    this.setState({ editorState });
  };

  getEnteredCharsCount = text => {
    let enteredChars = 0;
    const allBlocks = JSON.parse(text).blocks;
    allBlocks.forEach(block => {
      enteredChars += block.text.length;
    });
    this.setState({ enteredChars });
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
          this.convertToEditorState(this.state.story.storyText);
          this.getEnteredCharsCount(this.state.story.storyText);
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

  editText = storyText => {
    this.setState({
      story: { ...this.state.story, storyText: JSON.stringify(storyText) }
    });
  };

  // for demo ONLY
  checkIfFieldIsValid = name => {
    return true;
  };

  isValidEditorContent = () => {
    let { enteredChars } = this.state;

    if (enteredChars >= minLength && enteredChars <= maxLength) {
      return true;
    } else {
      alert(`Story text length must be between ${minLength}-${maxLength}`);
      return false;
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.isValidEditorContent()) {
      if (this.state.updating) {
        this.updateStory();
      } else {
        this.createStory();
      }
    }
  };

  updateStory = () => {
    Axios.put("/api/stories/" + this.state.story.id, this.state.story)
      .then(result => {
        this.props.history.goBack();
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  createStory = () => {
    Axios.post("/api/stories", this.state.story)
      .then(result => {
        this.props.history.goBack();
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

  onEditorStateChange = editorState => {
    this.setState({ editorState }, () => {
      let charsCount = 0;
      const text = convertToRaw(editorState.getCurrentContent());

      text.blocks.forEach(block => {
        charsCount += block.text.length;
      });

      this.setState({ enteredChars: charsCount });
      this.editText(text);
    });
  };

  render() {
    let { enteredChars } = this.state;

    let captionCounterBody =
      enteredChars === 0
        ? `enter at least ${minLength} characters`
        : enteredChars < minLength
        ? `${minLength - enteredChars} more to go...`
        : enteredChars > maxLength
        ? `too long by ${enteredChars - maxLength} characters`
        : `${maxLength - enteredChars} characters left`;

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
            <Avatar
              className="img-upload-preveiw"
              src={
                this.state.uploading.img
                  ? "/imgs/loading.gif"
                  : this.state.story.img
                  ? this.state.story.img
                  : "https://beedie.sfu.ca/corporate-governance-blog/wp-content/themes/newsroom13/img/placeholder.png"
              }
            />

            <TextField
              style={{ marginTop: 0 }}
              label="upload good image for your story"
              className="full-width-input"
              name="img"
              InputLabelProps={{
                shrink: true
              }}
              variant="filled"
              helperText="max size 1.mb"
              type="file"
              accept="image/*"
              required={this.state.updating ? false : true}
              onChange={this.uploadImage}
            />
          </div>
          <MyEditor
            editorState={this.state.editorState}
            onEditorStateChange={this.onEditorStateChange}
          />
          <Typography variant="caption">{captionCounterBody}</Typography>
        </Form>
      </div>
    );
  }
}
