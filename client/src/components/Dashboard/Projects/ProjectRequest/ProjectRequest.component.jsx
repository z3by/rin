import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { Link } from "react-router-dom";

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

  deleteProject = project => {
    Axios.delete(`/api/projects/${project.id}`)
      .then(res => {
        this.fetchRequests();
      })
      .catch(err => {
        console.log("Error deleting a table row");
      });
  };

  acceptProject = id => {
    Axios.put(`/api/requests`, { id: id })
      .then(res => {
        this.fetchRequests();
      })
      .catch(err => {
        console.log("Error accepting request");
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
                    <Link
                      to={`/dashboard/projects/list/updateproject/${row.id}`}
                    >
                      <Button>
                        <i
                          className="fas fa-edit"
                          style={{ color: "royalblue" }}
                        />
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        this.acceptProject(row.id);
                      }}
                    >
                      <i
                        className="fas fa-check"
                        style={{ color: "lightgreen" }}
                      />
                    </Button>
                    <Button
                      onClick={() => {
                        this.deleteProject(row);
                      }}
                    >
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
