import React, { Component } from "react";
import "./UsersList.css";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
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
      currentPage: 1,
      usersPerPage: 10,
      allUsersCount: 0,
      selectedPageUsers: [],
      indexOfLastUser: 0,
      indexOfFirstUser: 0
    };
  }

  componentWillMount() {
    this.fetchAllUsersCount();
    this.setAndRetrieveSelectedPageUsers();
  }

  componentDidMount() {}

  fetchAllUsersCount = () => {
    Axios.get("/users/allusers/count").then(res => {
      this.setState({ allUsersCount: res.data["count(*)"] });
    });
  };

  fetchSelectedPageUsers = (firstUserIndex, lastUserIndex) => {
    const indexes = {
      first: firstUserIndex,
      last: lastUserIndex
    };

    Axios.get("/users/allusers/selectedpage", {
      params: indexes
    })
      .then(res => {
        this.setState({ selectedPageUsers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  setAndRetrieveSelectedPageUsers = () => {
    this.setState(
      { indexOfLastUser: this.state.currentPage * this.state.usersPerPage },
      () => {
        this.setState(
          {
            indexOfFirstUser:
              this.state.indexOfLastUser - this.state.usersPerPage
          },
          () => {
            this.fetchSelectedPageUsers(
              this.state.indexOfFirstUser,
              this.state.indexOfLastUser
            );
          }
        );
      }
    );
  };

  changeCurrentPage = number => {
    this.setState({ currentPage: number }, () => {
      this.setAndRetrieveSelectedPageUsers();
    });
  };

  render() {
    const {
      allUsersCount,
      currentPage,
      usersPerPage,
      selectedPageUsers
    } = this.state;

    const allUsers = selectedPageUsers.map(user => {
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
    for (let i = 1; i <= Math.ceil(allUsersCount / usersPerPage); i++) {
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
            className={number === currentPage ? "active-page-number" : ""}
          >
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

        <ul id="page-numbers">{allPagesNumbers}</ul>
      </Paper>
    );
  }
}
