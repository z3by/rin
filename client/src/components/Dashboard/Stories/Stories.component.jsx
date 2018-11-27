import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import StoriesList from "./StoriesList/StoriesList.component";
import NewStory from "./NewStory/NewStory.component";
import StoryInfo from "./StoryInfo/StoryInfo.component";
import UpdateStory from "./UpdateStory/UpdateStory.component";
import StoriesSearchResults from "./StoriesSearchResults/StoriesSearchResults.component";

export default class Stories extends Component {
  searchStories = e => {
    if (e.key === "Enter") {
      //a condition to avoid empty search input
      if (e.target.value) {
        const input = e.target.value;
        this.props.history.push(`/dashboard/stories/search/${input}`);
      };
    }
  }

  render() {
    return (
      <div className="projects-dashboard fadeInFast">
        <nav className="nav-up">
          <Link to="/dashboard/stories/add">
            <i className="fas fa-plus" />
            <span>New Story</span>
          </Link>
          <div className="search-group">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onKeyUp={this.searchStories}
            />
            <i className="fas fa-search" />
          </div>
        </nav>
        <main>
          <Route path={"/dashboard/stories/add"} component={NewStory} />
          <Route
            exact
            path={"/dashboard/stories/list"}
            component={StoriesList}
          />
          <Route
            exact
            path={"/dashboard/stories/list/:id"}
            component={StoryInfo}
          />
          <Route
            exact
            path={"/dashboard/stories/list/updatestory/:id"}
            component={UpdateStory}
          />
          <Route
            exact
            path={"/dashboard/stories/search/:option"}
            component={StoriesSearchResults}
          />
        </main>
      </div>
    );
  }
}
