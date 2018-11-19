import React, { Component } from "react";
import "./UsersList.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentPage: 1,
      usersPerPage: 10
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    Axios.get("/users/all").then(res => {
      console.log(res);

      this.setState({
        users: res.data
      });
    });
  };

  changeCurrentPage = (number) => {
    this.setState({ currentPage: number })
  }

  render() {
    const { users, currentPage, usersPerPage } = this.state;

    // Logic for displaying stories
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const allUsers = currentUsers.map(user => {
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
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
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
      <Paper className="all-users">
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
          <TableBody>{allUsers}</TableBody>
        </Table>

        <ul id="page-numbers">
          {allPagesNumbers}
        </ul>
      </Paper>
    );
  }
}
