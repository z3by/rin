import React, { Component } from "react";
import "./Blog.css";
import ArticleCard from "./ArticleCard";
import IconButton from "@material-ui/core/IconButton";
import Axios from "axios";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 0,
      articles: []
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    Axios.get("/api/articles").then(res => {
      this.setState({ articles: res.data });
    });
  };

  scrollToTop = () => {
    document.querySelector(".library").scrollIntoView({
      behavior: "smooth"
    });
  };

  goDown = () => {
    document.querySelector(".container").scrollIntoView({
      behavior: "smooth"
    });
  };

  render() {
    return (
      <div
        className="blog fadeInFast"
        style={{
          overflowY: "scroll"
        }}
      >
        <header>
          <div className="banner-full">
            <h1>blog</h1>
            <div className="line" />
            <h3>read the RIN latest articles</h3>
            <div className="go-down" onClick={this.goDown}>
              <IconButton>
                <i className="fas fa-arrow-down color-2" />
              </IconButton>
            </div>
          </div>
        </header>
        <div className="container">
          {this.state.articles.map((article, id) => {
            return <ArticleCard article={article} />;
          })}
        </div>
      </div>
    );
  }
}
