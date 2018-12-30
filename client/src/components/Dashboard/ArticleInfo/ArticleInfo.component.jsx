import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Axios from "axios";
import "./ArticleInfo.css";
import draftToHtml from "draftjs-to-html";
import renderHTML from "react-render-html";
import Footer from "../../Footer/Footer.component";

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

  goTop = () => {
    document.querySelector(".header-img").scrollIntoView({
      behavior: "smooth"
    });
  };

  goDown = () => {
    document.body.scrollBy({
      top: window.innerHeight - document.body.scrollTop,
      behavior: "smooth"
    });
  };

  render() {
    const article = this.state.articleData;
    const { articleText } = this.state;
    return (
      <div style={{ margin: 0, position: "relative" }}>
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
          <div className="go-down" onClick={this.goDown}>
            <IconButton onClick={this.goDown}>
              <i className="fas fa-arrow-down color-1" />
            </IconButton>
          </div>
        </div>
        <div className="container">{renderHTML(articleText)}</div>
        <Footer />
      </div>
    );
  }
}
