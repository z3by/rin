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

export default class Permissions extends Component {
  state = {
    permissions: []
  };

  componentDidMount() {
    this.fetchPermissions();
  }

  fetchPermissions = () => {
    Axios.get("/api/permissions").then(result => {
      this.setState({ permissions: result.data });
    });
  };

  deleteRole = id => {
    Axios.delete("/api/permissions/" + id).then(res => {
      this.fetchPermissions();
    });
  };

  render() {
    return (
      <div className="container">
        <Typography
          variant="h4"
          className="text-center"
          style={{ display: !this.state.permissions.length ? "block" : "none" }}
        >
          No Permissions Yet
        </Typography>
        {this.state.permissions.map((permission, i) => {
          return (
            <Card style={{ margin: 5 }} key={i} className="permission-card">
              <CardContent>
                <Typography variant="h6" className="color-3">
                  Role Name: <span>{permission.name}</span>
                </Typography>
              </CardContent>
              <CardActions className="permission-card-actions">
                <Link to={`/dashboard/updatepermission/${permission.id}`}>
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
                    this.deleteRole(permission.id);
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
        <Link to="/dashboard/addpermission">
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
