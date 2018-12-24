import React, { Component } from "react";
import MyRouter from "./components/Router/Router";
import AOS from "aos";
import "aos/dist/aos.css";

class App extends Component {
  render() {
    // initialize AOS library
    AOS.init({
      offset: 100, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: "ease" // default easing for AOS animations
    });

    return (
      <div>
        <MyRouter />
      </div>
    );
  }
}

export default App;
