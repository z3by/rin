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
      allStories: []
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

  render() {
    const stories = this.state.allStories.map(story => {
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

    return (
      <Paper>
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
      </Paper>
    );
  }
}
