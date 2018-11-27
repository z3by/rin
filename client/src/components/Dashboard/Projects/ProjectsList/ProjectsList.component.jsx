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
      currentPage: 1,
      projectsPerPage: 10,
      allProjectsCount: 0,
      selectedPageProjects: [],
      indexOfLastProject: 0,
      indexOfFirstProject: 0
    };
  }

  componentWillMount() {
    this.fetchAllProjectsCount();
    this.setAndRetrieveSelectedPageProjects();
  }

  componentDidMount() {
    document.body.style.overflowY = "auto";
  }

  fetchAllProjectsCount = () => {
    axios.get("/api/projects/count").then(res => {
      this.setState({ allProjectsCount: res.data["count(*)"] });
    });
  };

  fetchSelectedPageProjects = (firstProjectIndex, lastProjectIndex) => {
    const indexes = {
      first: firstProjectIndex,
      last: lastProjectIndex
    };

    axios
      .get("/api/projects/selectedpage", {
        params: indexes
      })
      .then(res => {
        this.setState({ selectedPageProjects: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  setAndRetrieveSelectedPageProjects = () => {
    this.setState(
      {
        indexOfLastProject: this.state.currentPage * this.state.projectsPerPage
      },
      () => {
        this.setState(
          {
            indexOfFirstProject:
              this.state.indexOfLastProject - this.state.projectsPerPage
          },
          () => {
            this.fetchSelectedPageProjects(
              this.state.indexOfFirstProject,
              this.state.indexOfLastProject
            );
          }
        );
      }
    );
  };

  deleteProject = project => {
    axios
      .delete(`/api/projects/${project.id}`)
      .then(res => {
        this.fetchSelectedPageProjects(
          this.state.indexOfFirstProject,
          this.state.indexOfLastProject
        );
      })
      .catch(err => {
        console.log("Error deleting a table row");
      });
  };

  changeCurrentPage = number => {
    this.setState({ currentPage: number }, () => {
      this.setAndRetrieveSelectedPageProjects();
    });
  };

  render() {
    const {
      allProjectsCount,
      projectsPerPage,
      selectedPageProjects
    } = this.state;

    const projects = selectedPageProjects.map((project, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{project.id}</TableCell>
          <TableCell>{project.title}</TableCell>
          <TableCell>{project.organization_name}</TableCell>
          <TableCell>
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

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allProjectsCount / projectsPerPage); i++) {
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
      <Paper className="projectsPages fadeInFast">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project ID</TableCell>
              <TableCell>Project Name</TableCell>
              <TableCell>Organization Name</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>{projects}</TableBody>
        </Table>

        <ul id="page-numbers">{allPagesNumbers}</ul>
      </Paper>
    );
  }
}
