import React, { Component } from "react";
import Form from "../../general-components/Form/Form.component";
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

export default class ArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      updating: false,
      editorState: EditorState.createEmpty(),
      enteredChars: 0,
      article: {},
      uploading: { img: false }
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
          this.convertToEditorState(this.state.article.text);
          this.getEnteredCharsCount(this.state.article.text);
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

  editText = text => {
    this.setState({
      article: { ...this.state.article, text: JSON.stringify(text) }
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
      alert(`Article text length must be between ${minLength}-${maxLength}`);
      return false;
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.isValidEditorContent()) {
      if (this.state.updating) {
        this.updateArticle();
      } else {
        this.createArticle();
      }
    }
  };

  updateArticle = () => {
    Axios.put("/api/articles/" + this.state.article.id, this.state.article)
      .then(result => {
        this.props.history.push("/dashboard/articles");
      })
      .catch(err => {
        this.showErrorMessage(err);
      });
  };

  createArticle = () => {
    this.setState({ adding: true });
    Axios.post("/api/articles", this.state.article)
      .then(result => {
        this.props.history.push("/dashboard/articles");
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
            <Avatar
              className="img-upload-preveiw"
              src={
                this.state.uploading.img
                  ? "/imgs/loading.gif"
                  : this.state.article.img
                  ? this.state.article.img
                  : "https://beedie.sfu.ca/corporate-governance-blog/wp-content/themes/newsroom13/img/placeholder.png"
              }
            />

            <TextField
              style={{ marginTop: 0 }}
              className="full-width-input"
              helperText="max size 1.mb"
              name="img"
              label="upload image for your article"
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
