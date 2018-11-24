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
      currentPage: 1,
      articlesPerPage: 10,
      allArticlesCount: 0,
      selectedPageArticles: [],
      indexOfLastArticle: 0,
      indexOfFirstArticle: 0
    };
  }

  componentDidMount() {
    this.fetchAllArticlesCount();
    this.setAndRetrieveSelectedPageArticles();
  }

  setAndRetrieveSelectedPageArticles = () => {
    this.setState(
      {
        indexOfLastArticle: this.state.currentPage * this.state.articlesPerPage
      },
      () => {
        this.setState(
          {
            indexOfFirstArticle:
              this.state.indexOfLastArticle - this.state.articlesPerPage
          },
          () => {
            this.fetchSelectedPageArticles(
              this.state.indexOfFirstArticle,
              this.state.indexOfLastArticle
            );
          }
        );
      }
    );
  };

  fetchAllArticlesCount = () => {
    Axios.get("/api/articles/count").then(res => {
      this.setState({ allArticlesCount: res.data["count(*)"] });
    });
  };

  fetchSelectedPageArticles = (firstArticleIndex, lastArticleIndex) => {
    const indexes = {
      first: firstArticleIndex,
      last: lastArticleIndex
    };

    Axios.get("/api/articles/selectedpage", {
      params: indexes
    })
      .then(res => {
        console.log(res.data);

        this.setState({ selectedPageArticles: res.data });
      })
      .catch(err => {
        console.log(err);
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
          {this.state.selectedPageArticles.map((article, id) => {
            return <ArticleCard article={article} key={id} />;
          })}
        </div>
      </div>
    );
  }
}
