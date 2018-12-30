import React, { Component } from "react";
import {
  Card,
  IconButton,
  CardContent,
  Typography,
  CardActions
} from "@material-ui/core";
import Axios from "axios";
import { Link } from "react-router-dom";

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

  render() {
    return (
      <div className="container">
        {this.state.roles.map((role, i) => {
          return (
            <Card style={{ margin: 5 }} className="role-card">
              <CardContent>
                <Typography variant="h6" className="color-3">
                  Role Name: <span>{role.name}</span>
                </Typography>
              </CardContent>
              <CardActions className="role-card-actions">
                <Link to={"/dashboard/"}>
                  <IconButton>
                    <i
                      className="far fa-eye"
                      style={{ fontSize: "1rem", margin: 0 }}
                    />
                  </IconButton>
                </Link>
                <Link to={`/dashboard/update`}>
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
                <a>
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
      </div>
    );
  }
}
