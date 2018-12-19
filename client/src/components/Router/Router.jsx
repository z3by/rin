import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import "../../App.css";

import About from "../About/About.component";
import Stories from "../Stories/Stories.component";
import Map from "../Map/Map.component";
import Members from "../Members/Members.component";
import Data from "../Data/Data.component";
import Landing from "../Landing/Landing.component";
import News from "../News/News.component";
import Blog from "../Blog/Blog.component";
import Login from "../Login/Login.component";
import Navbar from "../Navbar/Navbar.component";
import Dashboard from "../Dashboard/Dashboard.component";
import SignUpLogIn from "../SignUpLogIn/SignUpLogIn.component";
import StoryInfo from "../Dashboard/StoryInfo/StoryInfo.component";
import MoreStories from "../Stories/MoreStories/MoreStories.component";
import AddProject from "../AddProject/AddProject.component";
import AdminList from "../general-components/AdminList/AdminList.component";
import ArticleInfo from "../Dashboard/ArticleInfo/ArticleInfo.component";

export default class MyRouter extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route path="" component={Navbar} />
          <Switch>
            <Route path="/stories/:id" component={StoryInfo} />
            <Route path="/list" component={AdminList} />
            <Route path="/stories" component={Stories} />
            <Route path="/all-stories" component={MoreStories} />
            <Route path="/map" component={Map} />
            <Route path="/add-project" component={AddProject} />
            <Route path="/data" component={Data} />
            <Route path="/news" component={News} />
            <Route path="/blog/:id" component={ArticleInfo} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/login" component={SignUpLogIn} />
            <Route path="/members" component={Members} />
            <Route path="/admin" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Landing} />
            <Route component={Landing} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
