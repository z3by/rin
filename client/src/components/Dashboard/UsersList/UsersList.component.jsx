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
      users: [
        {
          first_name: "ahmad",
          last_name: "mostafa",
          organization_name: "rbk",
          user_role: "role",
          email: "email@mail.com"
        }
      ]
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

  render() {
    const users = this.state.users.map(user => {
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
