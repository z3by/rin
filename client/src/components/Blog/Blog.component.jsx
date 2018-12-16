import React, { Component } from "react";
import "./Blog.css";
import ArticleCard from "./ArticleCard";
import IconButton from "@material-ui/core/IconButton";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      nomore: false
    };
  }

  componentDidMount() {
    this.fetcArticles();
  }

  fetcArticles = () => {
    const first = this.state.articles.length;
    const last = first + 10;
    const indexes = { first, last };

    Axios.get("/api/articles/page", {
      params: indexes
    })
      .then(res => {
        if (!res.data.rows.length) {
          this.setState({
            nomore: true
          });
        }
        this.setState({ articles: [...this.state.articles, ...res.data.rows] });
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
                <i className="fas fa-arrow-down color-1" />
              </IconButton>
            </div>
          </div>
        </header>
        <div className="container">
          {this.state.articles.map((article, id) => {
            return <ArticleCard article={article} key={id} />;
          })}
        </div>
        <Typography
          variant="h6"
          style={{
            display: this.state.nomore ? "block" : "none",
            textAlign: "center",
            margin: "20px 0"
          }}
        >
          No more articles!
        </Typography>
        <Button
          style={{
            background: "var(--color-2)",
            color: "white",
            display: this.state.nomore ? "none" : "block",
            margin: "20px auto"
          }}
          onClick={this.fetcArticles}
        >
          Show more stories...
        </Button>
      </div>
    );
  }
}
