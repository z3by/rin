import React, { Component } from 'react';
import "./StoriesSearchResults.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default class StoriesSearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            storiesPerPage: 10,
            searchedStories: [],
            searchedStoriesCount: 0,
            searchInput: ""
        }
    }

    componentWillMount() {
        this.setSreachInputAndGetSearchedStories();
    }

    componentDidMount() {
        document.body.style.overflowY = "auto";
    }

    setSreachInputAndGetSearchedStories = () => {
        this.setState({ searchInput: this.props.history.location.pathname.slice(26) }, () => {
            this.getSearchedStories();
        });
    }

    getSearchedStories = () => {
        let { searchInput } = this.state;
        axios.get(`/api/stories/search/${searchInput}`)
            .then(res => {
                this.setState({ searchedStories: res.data }, () => {
                    this.setState({ searchedStoriesCount: res.data.length })
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentWillReceiveProps() {
        this.setSreachInputAndGetSearchedStories();
    }

    changeCurrentPage = (number) => {
        this.setState({ currentPage: number });
    }

    render() {
        const { searchedStories, searchedStoriesCount, storiesPerPage, currentPage } = this.state;

        // Logic for displaying projects
        const indexOfLastStory = currentPage * storiesPerPage;
        const indexOfFirstStory = indexOfLastStory - storiesPerPage;
        const currentStories = searchedStories.slice(indexOfFirstStory, indexOfLastStory);

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
        for (let i = 1; i <= Math.ceil(searchedStoriesCount / storiesPerPage); i++) {
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
            <div className="storiesPages">
                <h5 className="heading-theme-2">{this.state.searchedStoriesCount} Result/s has been found</h5>
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

                    <ul id="page-numbers">
                        {allPagesNumbers}
                    </ul>
                </Paper>
            </div>
        )
    }
}
