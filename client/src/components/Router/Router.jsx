import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import "../../App.css";

import About from "../About/About.component";
import Stories from "../Stories/Stories.component";
import Map from "../Map/Map.component";
import Members from "../Members/Members.component";
import Data from "../Data/Data.component";
import Landing from "../Landing/Landing.component";
import Library from "../Library/Library.component";
import Login from "../Login/Login.component";
import Navbar from "../Navbar/Navbar.component";
import Dashboard from "../Dashboard/Dashboard.component";
import SignUpLogIn from "../SignUpLogIn/SignUpLogIn.component";
import StoryDetails from "../Stories/StoryDetails/StoryDetails.component";

export default class MyRouter extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/stories/:id" component={StoryDetails} />
            <Route path="/stories" component={Stories} />
            <Route path="/map" component={Map} />
            <Route path="/data" component={Data} />
            <Route path="/library" component={Library} />
            <Route path="/about" component={About} />
            <Route path="/login" component={SignUpLogIn} />
            <Route path="/members" component={Members} />
            <Route path="/admin" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
