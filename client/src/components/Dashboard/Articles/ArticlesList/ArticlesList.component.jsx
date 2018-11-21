import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ArticlesList.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      articlesPerPage: 10,
      allArticlesCount: 0,
      selectedPageArticles: [],
      indexOfLastArticle: 0,
      indexOfFirstArticle: 0
    };
  }

  componentWillMount() {
    this.fetchAllArticlesCount();
    this.setAndRetrieveSelectedPageArticles();
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
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
    axios.get("/api/articles/count").then(res => {
      this.setState({ allArticlesCount: res.data["count(*)"] });
    });
  };

  fetchSelectedPageArticles = (firstArticleIndex, lastArticleIndex) => {
    const indexes = {
      first: firstArticleIndex,
      last: lastArticleIndex
    };

    axios
      .get("/api/articles/selectedpage", {
        params: indexes
      })
      .then(res => {
        this.setState({ selectedPageArticles: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteArticle = article => {
    axios
      .delete(`/api/articles/${article.id}`)
      .then(res => {
        this.fetchSelectedPageArticles(
          this.state.indexOfFirstArticle,
          this.state.indexOfLastArticle
        );
      })
      .catch(err => {
        console.log("Error deleting a table row");
      });
  };

  changeCurrentPage = number => {
    this.setState({ currentPage: number }, () => {
      this.setAndRetrieveSelectedPageArticles();
    });
  };

  render() {
    const {
      allArticlesCount,
      articlesPerPage,
      selectedPageArticles
    } = this.state;

    const articles = selectedPageArticles.map(article => {
      return (
        <TableRow>
          <TableCell>{article.id}</TableCell>
          <TableCell>{article.title}</TableCell>
          <TableCell>{article.subtitle}</TableCell>
          <TableCell numeric>
            <Link to={`/dashboard/articles/list/${article.id}`}>
              <Button>
                <i className="far fa-eye" />
              </Button>
            </Link>
            <Link to={`/dashboard/articles/list/updateArticle/${article.id}`}>
              <Button>
                <i className="fas fa-edit" style={{ color: "royalblue" }} />
              </Button>
            </Link>
            <a onClick={() => this.deleteArticle(article)}>
              <Button>
                <i className="fas fa-trash-alt" style={{ color: "crimson" }} />
              </Button>
            </a>
          </TableCell>
        </TableRow>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allArticlesCount / articlesPerPage); i++) {
      pageNumbers.push(i);
    }

    const allPagesNumbers = pageNumbers.map(number => {
      return (
        <li key={number}>
          <Button
            variant="fab"
            mini
            onClick={() => {
              this.changeCurrentPage(number);
            }}
            className={
              number === this.state.currentPage ? "active-page-number" : ""
            }
          >
            {number}
          </Button>
        </li>
      );
    });

    return (
      <Paper className="articlesPages">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Article ID</TableCell>
              <TableCell>Article Title</TableCell>
              <TableCell>Article Subtitle</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>{articles}</TableBody>
        </Table>

        <ul id="page-numbers">{allPagesNumbers}</ul>
      </Paper>
    );
  }
}
