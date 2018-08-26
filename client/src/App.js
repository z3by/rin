import React, { Component } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

import Landing from "./components/landing/Landing.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
