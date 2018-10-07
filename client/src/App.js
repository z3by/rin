import React, { Component } from "react";
import MyRouter from "./components/Router/Router";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <MyRouter />
        </Provider>
      </div>
    );
  }
}

export default App;
