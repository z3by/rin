import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import ArticlesList from "./ArticlesList/ArticlesList.component";
import NewArticle from "./NewArticle/NewArticle.component";
import ArticleInfo from "./ArticleInfo/ArticleInfo.component";
import UpdateArticle from "./UpdateArticle/UpdateArticle.component";

export default class Articles extends Component {
  render() {
    return (
      <div className="projects-dashboard">
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
        <main>
          <Route path={"/dashboard/articles/add"} component={NewArticle} />
          <Route
            exact
            path={"/dashboard/articles/list"}
            component={ArticlesList}
          />
          <Route
            exact
            path={"/dashboard/articles/list/:id"}
            component={ArticleInfo}
          />
          <Route
            exact
            path={"/dashboard/articles/list/updateArticle/:id"}
            component={UpdateArticle}
          />
        </main>
      </div>
    );
  }
}
