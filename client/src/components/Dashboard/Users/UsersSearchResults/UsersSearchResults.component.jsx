import React, { Component } from 'react';
import "./UsersSearchResults.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default class UsersSearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            usersPerPage: 10,
            searchedUsers: [],
            searchedUsersCount: 0,
            searchInput: ""
        }
    }

    componentWillMount() {
        this.setSreachInputAndGetSearchedUsers();
    }

    componentDidMount() {
        document.body.style.overflowY = "auto";
    }

    setSreachInputAndGetSearchedUsers() {
        this.setState({ searchInput: this.props.history.location.pathname.slice(24) }, () => {
            this.getSearchedUsers();
        });
    }

    getSearchedUsers = () => {
        let { searchInput } = this.state;
        axios.get(`/users/allusers/search/${searchInput}`)
            .then(res => {
                this.setState({ searchedUsers: res.data }, () => {
                    this.setState({ searchedUsersCount: res.data.length });
                });
            })
            .catch(err => {
                console.log(err);

            });
    }

    componentWillReceiveProps() {
        this.setState({ searchInput: this.props.history.location.pathname.slice(24) }, () => {
            this.getSearchedUsers();
        });
    }

    changeCurrentPage = (number) => {
        this.setState({ currentPage: number });
    }

    render() {
        const { searchedUsers, searchedUsersCount, usersPerPage, currentPage } = this.state;

        // Logic for displaying projects
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentUsers = searchedUsers.slice(indexOfFirstUser, indexOfLastUser);

        const users = currentUsers.map(user => {
            return (
                <TableRow>
                    <TableCell>{user.first_name}</TableCell>
                    <TableCell>{user.last_name}</TableCell>
                    <TableCell>{user.organization_name}</TableCell>
                    <TableCell>{user.user_role}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell numeric />
                </TableRow>
            );
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(searchedUsersCount / usersPerPage); i++) {
            pageNumbers.push(i);
        }

        const allPagesNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                >
                    <Button variant="fab" mini
                        onClick={() => { this.changeCurrentPage(number) }}
                        className={number === currentPage ? 'active-page-number' : ''}>
                        {number}
                    </Button>
                </li>
            );
        });

        return (
            <div className="all-users">
                <h5 className="heading-theme-2">{this.state.searchedUsersCount} Result/s has been found</h5>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Organization</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>{users}</TableBody>
                    </Table>

                    <ul id="page-numbers">
                        {allPagesNumbers}
                    </ul>
                </Paper>

            </div>
        )
    }
}
