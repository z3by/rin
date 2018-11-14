import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Axios from "axios";

export default class ProjectRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }
  componentDidMount() {
    this.fetchRequests();
  }

  fetchRequests = () => {
    Axios.get("/api/requests")
      .then(res => {
        this.setState({
          requests: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const rows = this.state.requests;
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Organization</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Type</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.organization_name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.project_description}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.type}
                  </TableCell>

                  <TableCell numeric>
                    <Button>
                      <i
                        className="fas fa-edit"
                        style={{ color: "royalblue" }}
                      />
                    </Button>
                    <Button>
                      <i
                        className="fas fa-check"
                        style={{ color: "lightgreen" }}
                      />
                    </Button>
                    <Button>
                      <i
                        className="fas fa-times"
                        style={{ color: "crimson" }}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
