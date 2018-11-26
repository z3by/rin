import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import LinksList from "./Links/LinksList.component";
import BooksList from "./Books/BooksList.component";
import ResearchesList from "./Researches/ResearchesList.component";
import AddLink from "./Links/AddLink.component";
import AddBook from "./Books/AddBook.component";
import AddResearch from "./Researches/AddResearch.component";

export default class Library extends Component {
  state = {
    anchorEl: null,
    currentPage: "links"
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = e => {
    this.setState({ anchorEl: null, currentPage: e.target.innerText });
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
            className="color-2"
          >
            <i className="fas fa-list-ul" />
            Sections
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem
              onClick={this.handleClose}
              style={{ padding: 0, width: "160px", height: "50px" }}
            >
              <Link
                className="color-5"
                to="/dashboard/library/links"
                style={{ width: "100%", display: "block", padding: "10px" }}
              >
                Links
              </Link>
            </MenuItem>
            <MenuItem
              onClick={this.handleClose}
              style={{ padding: 0, width: "160px", height: "50px" }}
            >
              <Link
                className="color-5"
                to="/dashboard/library/books"
                style={{ width: "100%", display: "block", padding: "10px" }}
              >
                Books
              </Link>
            </MenuItem>
            <MenuItem
              onClick={this.handleClose}
              style={{ padding: 0, width: "160px", height: "50px" }}
            >
              <Link
                className="color-5"
                to="/dashboard/library/researches"
                style={{ width: "100%", display: "block", padding: "10px" }}
              >
                Researches
              </Link>
            </MenuItem>
          </Menu>
          <Link
            to={`/dashboard/library/${this.state.currentPage.toLowerCase()}/add`}
          >
            <i className="fas fa-plus" />
            <span>New {this.state.currentPage.slice(0, -1)}</span>
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
        <main>
          <Switch>
            <Route path="/dashboard/library/links/add" component={AddLink} />
            <Route path="/dashboard/library/books/add" component={AddBook} />
            <Route
              path="/dashboard/library/researches/add"
              component={AddResearch}
            />
            <Route path="/dashboard/library/links" component={LinksList} />
            <Route path="/dashboard/library/books" component={BooksList} />
            <Route
              path="/dashboard/library/researches"
              component={ResearchesList}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
