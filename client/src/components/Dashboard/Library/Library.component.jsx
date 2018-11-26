import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

export default class Library extends Component {
  render() {
    return (
      <div className="projects-dashboard fadeInFast">
        <nav className="nav-up">
          <Link to="/dashboard/articles/add">
            <i className="fas fa-plus" />
            <span>New Article</span>
          </Link>
          <div className="search-group">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
            />
            <i className="fas fa-search" />
          </div>
        </nav>
        <main>hello form library</main>
      </div>
    );
  }
}
