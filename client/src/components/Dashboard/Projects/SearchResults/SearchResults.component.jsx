import React, { Component } from 'react';
import "./SearchResults.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            projectsPerPage: 10,
            searchedProjects: [],
            searchedProjectsCount: 0,
            searchInput: ""
        }
    }

    componentWillMount() {
        this.setSreachInputAndGetSearchedProjects();
    }

    componentDidMount() {
        document.body.style.overflowY = "auto";
    }

    componentWillReceiveProps() {
        this.setSreachInputAndGetSearchedProjects();
    }

    setSreachInputAndGetSearchedProjects = () => {
        this.setState({ searchInput: this.props.history.location.pathname.slice(27) }, () => {
            this.getSearchedProjects();
        });
    }

    getSearchedProjects = () => {
        let { searchInput } = this.state;
        axios.get(`/api/projects/search/${searchInput}`)
            .then(res => {
                this.setState({ searchedProjects: res.data }, () => {
                    this.setState({ searchedProjectsCount: this.state.searchedProjects.length }, () => { console.log(this.state.searchedProjectsCount) })
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    changeCurrentPage = (number) => {
        this.setState({ currentPage: number });
    }

    render() {
        let { searchedProjects, searchedProjectsCount, currentPage, projectsPerPage } = this.state;

        // Logic for displaying projects
        const indexOfLastProject = currentPage * projectsPerPage;
        const indexOfFirstProject = indexOfLastProject - projectsPerPage;
        const currentProjects = searchedProjects.slice(indexOfFirstProject, indexOfLastProject);

        const projects = currentProjects.map(project => {
            return (
                <TableRow>
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
        for (let i = 1; i <= Math.ceil(searchedProjectsCount / projectsPerPage); i++) {
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
            <div className="projectsPages">
                <h5 className="heading-theme-2">{this.state.searchedProjectsCount} Result/s has been found</h5>
                <Paper>
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

                    <ul id="page-numbers">
                        {allPagesNumbers}
                    </ul>
                </Paper>
            </div>

        )
    }
}
