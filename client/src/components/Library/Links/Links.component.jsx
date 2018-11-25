import React, { Component } from "react";
import LibraryList from "../LibraryList/LibraryList.component";

export default class Links extends Component {
  render() {
    return (
      <div>
        <LibraryList endpoint="/api/articles" />
      </div>
    );
  }
}
