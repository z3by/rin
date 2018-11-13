import React, { Component } from "react";
import "./UsersList.css";
import { Route, Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          first_name: "ahmad",
          last_name: "mostafa",
          organization: "rbk",
          role: "role",
          email: "email@mail.com"
        }
      ]
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    console.log("hello");
  };

  render() {
    const users = this.state.users.map(user => {
      return (
        <TableRow>
          <TableCell>{user.first_name}</TableCell>
          <TableCell>{user.last_name}</TableCell>
          <TableCell>{user.organization}</TableCell>
          <TableCell>{user.role}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell numeric />
        </TableRow>
      );
    });

    return (
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
      </Paper>
    );
  }
}
