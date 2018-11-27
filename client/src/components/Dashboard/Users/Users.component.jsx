import React, { Component } from "react";
import "./Users.css";
import { Route } from "react-router-dom";
import UsersList from "./UsersList/UsersList.component";
import UsersSearchResults from "./UsersSearchResults/UsersSearchResults.component";

export default class Users extends Component {
  searchUsers = e => {
    if (e.key === "Enter") {
      //a condition to avoid empty search input
      if (e.target.value) {
        const input = e.target.value;
        this.props.history.push(`/dashboard/users/search/${input}`);
      }
    }
  };

  render() {
    return (
      <div className="users-dashboard fadeInFast">
        <nav className="nav-up">
          <div className="search-group">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onKeyUp={this.searchUsers}
            />
            <i className="fas fa-search" />
          </div>
        </nav>
        <main>
          <Route exact path={"/dashboard/users/list"} component={UsersList} />
          <Route
            exact
            path={"/dashboard/users/search/:option"}
            component={UsersSearchResults}
          />
        </main>
      </div>
    );
  }
}
