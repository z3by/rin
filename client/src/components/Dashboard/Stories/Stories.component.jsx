import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import StoriesList from "./StoriesList/StoriesList.component";
import NewStory from "./NewStory/NewStory.component";
import StoryInfo from "./StoryInfo/StoryInfo.component";
import UpdateStory from "./UpdateStory/UpdateStory.component";

export default class Stories extends Component {
  render() {
    return (
      <div className="projects-dashboard">
        <nav className="nav-up">
          <ul>
            <li>
              <Link to={"/dashboard/stories/add"}>add story</Link>
            </li>
          </ul>
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
        </main>
      </div>
    );
  }
}
