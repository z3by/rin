import React, { Component } from "react";
import {
  Card,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  Fab
} from "@material-ui/core";
import Axios from "axios";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

export default class Roles extends Component {
  state = {
    roles: []
  };

  componentDidMount() {
    this.fetchRoles();
  }

  fetchRoles = () => {
    Axios.get("/api/roles").then(result => {
      this.setState({ roles: result.data });
    });
  };

  deleteRole = id => {
    Axios.delete("/api/roles/" + id).then(res => {
      this.fetchRoles();
    });
  };

  render() {
    return (
      <div className="container">
        <Typography
          variant="h4"
          className="text-center"
          style={{ display: !this.state.roles.length ? "block" : "none" }}
        >
          No Roles Yet
        </Typography>
        {this.state.roles.map((role, i) => {
          return (
            <Card style={{ margin: 5 }} key={i} className="role-card">
              <CardContent>
                <Typography variant="h6" className="color-3">
                  Role Name: <span>{role.name}</span>
                </Typography>
              </CardContent>
              <CardActions className="role-card-actions">
                <Link to={`/dashboard/updaterole/${role.id}`}>
                  <IconButton>
                    <i
                      className="fas fa-edit"
                      style={{
                        color: "royalblue",
                        fontSize: "1rem",
                        margin: 0
                      }}
                    />
                  </IconButton>
                </Link>
                <a
                  onClick={() => {
                    this.deleteRole(role.id);
                  }}
                >
                  <IconButton>
                    <i
                      className="fas fa-trash-alt"
                      style={{ color: "crimson", fontSize: "1rem", margin: 0 }}
                    />
                  </IconButton>
                </a>
              </CardActions>
            </Card>
          );
        })}
        <Link to="/dashboard/addrole">
          <Fab
            aria-label="Add"
            style={{ backgroundColor: "var(--color-2)" }}
            className="fab-add-btn"
          >
            <AddIcon style={{ color: "var(--color-1)" }} />
          </Fab>
        </Link>
      </div>
    );
  }
}
