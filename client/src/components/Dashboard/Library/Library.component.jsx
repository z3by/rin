import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import LinksList from "./Links/LinksList.component";
import BooksList from "./Books/BooksList.component";
import ResearchesList from "./Researches/ResearchesList.component";

export default class Library extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div className="projects-dashboard fadeInFast">
        <nav className="nav-up">
          <Button
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            Sections
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>
              <Link className="color-5" to="/dashboard/library/links">
                Links
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Link className="color-5" to="/dashboard/library/books">
                Books
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Link className="color-5" to="/dashboard/library/researches">
                Researches
              </Link>
            </MenuItem>
          </Menu>

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
          <Route path="/dashboard/library/links" component={LinksList} />
          <Route path="/dashboard/library/books" component={BooksList} />
          <Route
            path="/dashboard/library/researches"
            component={ResearchesList}
          />
        </main>
      </div>
    );
  }
}
