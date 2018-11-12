import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProjectsList.css";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProject: []
    };
  }

  componentWillMount() {
    this.fetchAllProjects();
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  fetchAllProjects = () => {
    axios.get("/api/projects").then(res => {
      this.setState({ allProject: res.data });
    });
  };

  deleteProject = project => {
    axios
      .delete(`/api/projects/${project.id}`)
      .then(res => {
        this.fetchAllProjects();
      })
      .catch(err => {
        console.log("Error deleting a table row");
      });
  };

  render() {
    const projects = this.state.allProject.map(project => {
      return (
        <TableRow>
          <TableCell>{project.id}</TableCell>
          <TableCell>{project.title}</TableCell>
          <TableCell>{project.organization_name}</TableCell>
          <TableCell className="project-options">
            <Link to={`/dashboard/projects/list/${project.id}`}>
              <Button>
                <i className="far fa-eye" />
              </Button>
            </Link>
            <Link to={`/dashboard/projects/list/updateproject/${project.id}`}>
              <Button>
                <i className="fas fa-edit" style={{ color: "royalblue" }} />
              </Button>
            </Link>
            <a onClick={() => this.deleteProject(project)}>
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
              <TableCell>Project ID</TableCell>
              <TableCell>Project Name</TableCell>
              <TableCell>Organization Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{projects}</TableBody>
        </Table>
      </Paper>
    );
  }
}
