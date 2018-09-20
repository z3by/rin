import React, { Component } from "react";
import MyRouter from "./components/Router/Router";

import "font-awesome/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="splash-screen">
          <img src="/imgs/old-logo.png" alt="" />
        </div>
        <MyRouter />
      </div>
    );
  }
}

export default App;
