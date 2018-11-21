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
      ArticlesPerPage: 10,
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
        indexOfLastArticle: this.state.currentPage * this.state.ArticlesPerPage
      },
      () => {
        this.setState(
          {
            indexOfFirstArticle:
              this.state.indexOfLastArticle - this.state.ArticlesPerPage
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

  deleteArticle = Article => {
    axios
      .delete(`/api/Articles/${Article.id}`)
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
      ArticlesPerPage,
      selectedPageArticles
    } = this.state;

    const Articles = selectedPageArticles.map(Article => {
      return (
        <TableRow>
          <TableCell>{Article.id}</TableCell>
          <TableCell>{Article.title}</TableCell>
          <TableCell numeric>
            <Link to={`/dashboard/Articles/list/${Article.id}`}>
              <Button>
                <i className="far fa-eye" />
              </Button>
            </Link>
            <Link to={`/dashboard/Articles/list/updateArticle/${Article.id}`}>
              <Button>
                <i className="fas fa-edit" style={{ color: "royalblue" }} />
              </Button>
            </Link>
            <a onClick={() => this.deleteArticle(Article)}>
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
    for (let i = 1; i <= Math.ceil(allArticlesCount / ArticlesPerPage); i++) {
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
      <Paper className="ArticlesPages">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Article ID</TableCell>
              <TableCell>Article Title</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>{Articles}</TableBody>
        </Table>

        <ul id="page-numbers">{allPagesNumbers}</ul>
      </Paper>
    );
  }
}
