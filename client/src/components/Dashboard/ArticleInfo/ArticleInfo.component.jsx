import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import "./ArticleInfo.css";
import draftToHtml from "draftjs-to-html";
import renderHTML from "react-render-html";

export default class ArticleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleData: {},
      imageLoaded: false,
      articleText: ""
    };
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    const articleId = this.props.match.params.id;
    Axios.get("/api/articles/" + articleId).then(result => {
      this.setState({ articleData: result.data[0] }, () => {
        this.setState({
          articleText: draftToHtml(JSON.parse(this.state.articleData.text))
        });
      });
    });
  };

  render() {
    const article = this.state.articleData;
    const { articleText } = this.state;
    return (
      <Paper style={{ margin: 0, position: "relative" }}>
        <div
          className="header-img"
          style={{
            backgroundImage: "url(" + article.img + ")"
          }}
        />
        <div className="article-header">
          <Typography
            variant="h3"
            className="color-1 upper text-center"
            style={{
              fontWeight: "bolder",
              padding: 10
            }}
          >
            {article.title}
          </Typography>
          <Typography
            variant="h5"
            className="color-1 capitalize text-center"
            style={{ padding: 10 }}
          >
            {article.subtitle}
          </Typography>
        </div>
        <div className="container">{renderHTML(articleText)}</div>
      </Paper>
    );
  }
}
