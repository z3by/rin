import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Story from "../Stories/Story/Story.component";

export default class MyRouter extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/stories/:id" component={Story} />
            <Route path="/stories" component={Stories} />
            <Route path="/map" component={Map} />
            <Route path="/data" component={Data} />
            <Route path="/library" component={Library} />
            <Route path="/about" component={About} />
            <Route path="/members" component={Members} />
            <Route path="/admin" component={Login} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}
