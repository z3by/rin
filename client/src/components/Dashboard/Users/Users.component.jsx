import React, { Component } from "react";
import "./Users.css";
import { Route, Link } from "react-router-dom";
import UsersList from "../UsersList/UsersList.component";

export default class Users extends Component {
  render() {
    return (
      <div className="users-dashboard">
        <nav className="nav-up">
          <div className="search-group">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
            />
            <i className="fas fa-search" />
          </div>
        </nav>
        <main>
          <Route exact path={"/dashboard/users/list"} component={UsersList} />
        </main>
      </div>
    );
  }
}
