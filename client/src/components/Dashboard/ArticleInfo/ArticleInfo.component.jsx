import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import "./ArticleInfo.css";

export default class ArticleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleData: {},
      imageLoaded: false
    };
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    const articleId = this.props.match.params.id;
    Axios.get("/api/articles/" + articleId).then(result => {
      console.log(result);

      this.setState({ articleData: result.data[0] });
    });
  };

  render() {
    const article = this.state.articleData;
    return (
      <Paper style={{ padding: 20, position: "relative" }}>
        <img
          src={article.img}
          onLoad={this.handleImageLoading}
          className="w-100"
          alt=""
        />
        <div className="article-header">
          <Typography
            variant="h1"
            className="color-1 capitalize text-center"
            style={{
              fontWeight: "bolder",
              background: "var(--color-2)",
              padding: 10
            }}
          >
            {article.title}
          </Typography>
          <Typography
            variant="h3"
            className="color-1 capitalize text-center"
            style={{ background: "var(--color-4)", padding: 10 }}
          >
            {article.subtitle}
          </Typography>
        </div>
        <div className="container">
          <Typography variant="body1" className="color-5">
            {article.text}
          </Typography>
        </div>
      </Paper>
    );
  }
}
