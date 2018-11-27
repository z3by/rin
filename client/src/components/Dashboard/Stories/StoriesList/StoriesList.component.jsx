import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./StoriesList.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default class StoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      storiesPerPage: 10,
      allStoriesCount: 0,
      selectedPageStories: [],
      indexOfLastStory: 0,
      indexOfFirstStory: 0
    };
  }

  componentWillMount() {
    this.fetchAllStoriesCount();
    this.setAndRetrieveSelectedPageStories();
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  setAndRetrieveSelectedPageStories = () => {
    this.setState(
      { indexOfLastStory: this.state.currentPage * this.state.storiesPerPage },
      () => {
        this.setState(
          {
            indexOfFirstStory:
              this.state.indexOfLastStory - this.state.storiesPerPage
          },
          () => {
            this.fetchSelectedPageStories(
              this.state.indexOfFirstStory,
              this.state.indexOfLastStory
            );
          }
        );
      }
    );
  };

  fetchAllStoriesCount = () => {
    axios.get("/api/stories/count").then(res => {
      this.setState({ allStoriesCount: res.data["count(*)"] });
    });
  };

  fetchSelectedPageStories = (firstStoryIndex, lastStoryIndex) => {
    const indexes = {
      first: firstStoryIndex,
      last: lastStoryIndex
    };

    axios
      .get("/api/stories/selectedpage", {
        params: indexes
      })
      .then(res => {
        this.setState({ selectedPageStories: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteStory = story => {
    axios
      .delete(`/api/stories/${story.id}`)
      .then(res => {
        this.fetchSelectedPageStories(
          this.state.indexOfFirstStory,
          this.state.indexOfLastStory
        );
      })
      .catch(err => {
        console.log("Error deleting a table row");
      });
  };

  changeCurrentPage = number => {
    this.setState({ currentPage: number }, () => {
      this.setAndRetrieveSelectedPageStories();
    });
  };

  render() {
    const { allStoriesCount, storiesPerPage, selectedPageStories } = this.state;

    const stories = selectedPageStories.map((story, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{story.id}</TableCell>
          <TableCell>{story.title}</TableCell>
          <TableCell numeric>
            <Link to={`/dashboard/stories/list/${story.id}`}>
              <Button>
                <i className="far fa-eye" />
              </Button>
            </Link>
            <Link to={`/dashboard/stories/list/updatestory/${story.id}`}>
              <Button>
                <i className="fas fa-edit" style={{ color: "royalblue" }} />
              </Button>
            </Link>
            <a onClick={() => this.deleteStory(story)}>
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
    for (let i = 1; i <= Math.ceil(allStoriesCount / storiesPerPage); i++) {
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
      <Paper className="storiesPages fadeInFast">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Story ID</TableCell>
              <TableCell>Story Title</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>{stories}</TableBody>
        </Table>

        <ul id="page-numbers">{allPagesNumbers}</ul>
      </Paper>
    );
  }
}
