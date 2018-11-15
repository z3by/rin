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
      allStories: [],
      currentPage: 1,
      storiesPerPage: 10
    };
  }

  componentWillMount() {
    this.fetchAllStories();
  }

  componenTableCellidMount() {
    document.body.style.overflowY = "auto";
  }

  fetchAllStories = () => {
    axios.get("/api/stories").then(res => {
      this.setState({ allStories: res.data });
    });
  };

  deleteStory = story => {
    axios
      .delete(`/api/stories/${story.id}`)
      .then(res => {
        this.fetchAllStories();
      })
      .catch(err => {
        console.log("Error deleting a table row");
      });
  };

  changeCurrentPage = (number) => {
    this.setState({ currentPage: number })
  }

  render() {
    const { allStories, currentPage, storiesPerPage } = this.state;

    // Logic for displaying stories
    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    const currentStories = allStories.slice(indexOfFirstStory, indexOfLastStory);

    const stories = currentStories.map(story => {
      return (
        <TableRow>
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
    for (let i = 1; i <= Math.ceil(allStories.length / storiesPerPage); i++) {
      pageNumbers.push(i);
    }

    const allPagesNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
        >
          <Button variant="fab" mini
            onClick={() => { this.changeCurrentPage(number) }}
            className={number === this.state.currentPage ? 'active-page-number' : ''}>
            {number}
          </Button>
        </li>
      );
    });

    return (
      <Paper className="storiesPages">
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

        <ul id="page-numbers">
          {allPagesNumbers}
        </ul>
      </Paper>
    );
  }
}
